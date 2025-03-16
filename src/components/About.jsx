import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaUsers } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const Card = styled(motion.div)`
  background-color: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      icon: <FaCode />,
      title: 'Full Stack Development',
      description: 'Proficient in both frontend and backend development using modern technologies like React, Node.js, and MongoDB.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Problem Solving',
      description: 'Strong analytical and problem-solving skills demonstrated through various projects and internships.',
    },
    {
      icon: <FaUsers />,
      title: 'Leadership & Collaboration',
      description: 'Experienced in team leadership and collaboration through roles as Career Ambassador and Residential Assistant.',
    },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        <Grid>
          {cards.map((card, index) => (
            <Card
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Icon>{card.icon}</Icon>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </Grid>
        <AboutContent
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <AboutText>
            I am a Computer Science student at Loyola University Maryland, expected to graduate in May 2025. 
            My journey in software development has been marked by diverse experiences, from developing full-stack 
            applications to contributing to enterprise-level projects during my internship at Workday.
          </AboutText>
          <AboutText>
            
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 