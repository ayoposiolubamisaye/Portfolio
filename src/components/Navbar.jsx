import { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    padding: 2rem;
    gap: 2rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <Nav>
      <Logo>AO</Logo>
      <NavLinks>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-80}
          >
            {item.name}
          </NavLink>
        ))}
      </NavLinks>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </MobileMenuButton>
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 