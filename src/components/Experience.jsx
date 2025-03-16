import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme.colors.background};
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
  position: relative;
  z-index: 1;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.colors.accent};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 50%;
  padding-right: 2rem;
  z-index: 2;

  &:nth-child(even) {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    right: -8px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.accent};
    border: 2px solid ${props => props.theme.colors.background};
  }

  &:nth-child(even)::before {
    right: auto;
    left: -8px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding-right: 0;
    padding-left: 2rem;
    margin-left: 0;

    &:nth-child(even) {
      margin-left: 0;
      padding-left: 2rem;
    }

    &::before {
      right: auto;
      left: -8px;
    }

    &:nth-child(even)::before {
      left: -8px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.medium};
  width: 100%;
  position: relative;
  z-index: 3;
`;

const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.accent};
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-family: ${props => props.theme.fonts.heading};
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
  font-family: ${props => props.theme.fonts.heading};
`;

const Date = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 1rem;
`;

const experiences = [
  {
    title: 'Cybersecurity TF Manager',
    company: 'CodePath',
    date: 'August 2024 - Present',
    description: 'Architected and implemented training programs for 15 Cybersecurity Technical Fellows, focusing on secure technical assisting practices in penetration testing methodologies, and vulnerability assessment. Developed comprehensive technical documentation and standardized operating procedures for the CYB course curriculum.',
  },
  {
    title: 'Software QA Engineer Intern',
    company: 'Workday',
    date: 'Summer 2024',
    description: 'Served as a sole intern in a micro-team of 8 engineers, contributing to an Agile environment through daily scrum meetings, adaptive planning, and effective use of Jira for tracking progress and understanding the full SDLC. Played a key role in the Absence team, developing and executing automated test scripts for accruals, time-offs, and absences within the platform, ensuring 96% compliance with business logic and system requirements. Participated in the Workday annual hackathon, leveraging large language models in Jupyter notebooks to develop a dynamic solution that increased payroll processing efficiency by 25%.',
  },
  {
    title: 'Career Peer',
    company: 'CodePath',
    date: 'March 2024 - December 2024',
    description: 'Engineered documentation workflows using Notion and web collaborative tools to optimize resource management on CodePath\'s web platform. Worked alongside CodePath internal staff to facilitate resource documentation on the website, assisting 30,000+ students professionally, spanning nationwide.',
  },
  {
    title: 'Cybersecurity Technical Fellow',
    company: 'CodePath',
    date: 'July 2023 - August 2024',
    description: 'Led hands-on technical workshops in cybersecurity fundamentals, including network security, cryptography, and secure system design. Debugged and resolved complex technical issues for 500+ students across Fall \'23 and Spring \'24 CYB course offerings.',
  },
  {
    title: 'Chapter Vice President',
    company: 'ColorStack @ LUM',
    date: 'October 2024 - Present',
    description: 'Performed administrative duties facilitating workshops, hackathons and community building events.',
  },
  {
    title: 'Career Ambassador',
    company: 'Loyola University Maryland, Rizzo Career Center',
    date: 'August 2023 - Present',
    description: 'Served as a career ambassador for the Rizzo Career helping students with resumes, LinkedIn and job search. Conducted technical presentations for Messina and academic classes.',
  },
  {
    title: 'Resident Assistant',
    company: 'Loyola University Maryland, Office of Residential Life',
    date: 'August 2022 - Present',
    description: 'Served as a resident assistant helping students navigate the transition to university, floor programming and creating an safe and inclusive environment.',
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineHeader>
                  <Icon>
                    <FaBriefcase />
                  </Icon>
                  <div>
                    <Title>{exp.title}</Title>
                    <Company>{exp.company}</Company>
                  </div>
                </TimelineHeader>
                <Date>{exp.date}</Date>
                <Description>{exp.description}</Description>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;