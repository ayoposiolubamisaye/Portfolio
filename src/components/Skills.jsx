import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaCode,
  FaTools,
} from 'react-icons/fa';

const SkillsSection = styled.section`
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

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.medium};
  width: 100%;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.accent};
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.heading};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
  width: 100%;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 4px;
`;

const skills = [
  {
    category: 'Programming Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'C/C++', level: 80 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    icon: <FaReact />,
    skills: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'MongoDB', level: 75 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    category: 'Developer Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'Azure', level: 70 },
      { name: 'Jira', level: 75 },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </SectionTitle>
        <Grid>
          {skills.map((category, index) => (
            <SkillCard
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <SkillHeader>
                <Icon>{category.icon}</Icon>
                <SkillTitle>{category.category}</SkillTitle>
              </SkillHeader>
              <SkillList>
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillName>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </SkillName>
                    <ProgressBar>
                      <Progress
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 