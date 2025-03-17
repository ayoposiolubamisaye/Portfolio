import { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme.colors.surface};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.heading};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  width: 100%;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.colors.surface};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${props => props.theme.transitions.default};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-family: ${props => props.theme.fonts.heading};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.accent};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.default};
  font-size: 1rem;

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

const projects = [
  {
    title: 'TaskMaster',
    description: 'A task management application with client-side filtering, dynamic theming, and asynchronous data handling.',
    image: '/src/components/2310700.png',
    technologies: ['MERN Stack', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/ayoposiolubamisaye/taskmaster',
    demo: null,
  },
  {
    title: 'Custom Shell',
    description: 'A POSIX-compliant shell implementation with advanced features like command pipelines and signal handling.',
    image: '/src/components/png-transparent-computer-terminal-linux-console-computer-icons-command-line-interface-linux-commandline-interface-linux-ssh-thumbnail.png',
    technologies: ['C', 'GNU Readline Library', 'POSIX'],
    github: 'https://github.com/ayoposiolubamisaye/custom-shell',
    demo: null,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </SectionTitle>
        <Grid>
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.technologies.map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </ProjectLink>
                    {project.demo && (
                      <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 