
import React from 'react';
import {
  ExperienceContainer,
  ExperienceH1,
  SectionSubtitle,
  ExperienceWrapper,
  Timeline,
  TimelineItem,
  TimelineDot,
  ExperienceCard,
  DateBadge,
  ExperienceH2,
  Company,
  ExperienceP,
  TechStack,
  TechBadge
} from '../ExperienceElements';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Desarrollo de API para Cumplimiento Fiscal',
      company: 'HERMODITEX S.A.S',
      date: 'Enero 2024 - Agosto 2025',
      description: 'Lideré el diseño e implementación de una API local (utilizando FastAPI/Python como framework) que se interconectó con una API externa para la emisión en tiempo real de facturas electrónicas y notas crédito ante la DIAN.',
      achievements: [
        'Gestioné y mantuve bases de datos (SQL y NoSQL) para registrar las operaciones de compras y ventas, asegurando la integridad y precisión de la información transaccional.',
        'Implementación de arquitectura escalable y segura para procesamiento de datos fiscales en tiempo real.'
      ],
      technologies: ['Python', 'FastAPI', 'SQL', 'NoSQL', 'MongoDB', 'MySQL', 'REST API', 'Git'],
      isLeft: true
    }
  ];

  const cardVariants = {
    hidden: (isLeft) => ({
      opacity: 0,
      x: isLeft ? -80 : 80,
      scale: 0.9
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <ExperienceContainer id="experience">
      <ExperienceH1>Experiencia Profesional</ExperienceH1>
      <SectionSubtitle>
        Mi trayectoria en el desarrollo de soluciones tecnológicas innovadoras
      </SectionSubtitle>
      <ExperienceWrapper>
        <Timeline>
          {experiences.map((exp, i) => (
            <TimelineItem key={i} $isLeft={exp.isLeft}>
              <TimelineDot />
              <motion.div
                custom={exp.isLeft}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ width: '100%' }}
              >
                <ExperienceCard $isLeft={exp.isLeft}>
                  <DateBadge>{exp.date}</DateBadge>
                  <ExperienceH2>{exp.title}</ExperienceH2>
                  <Company>{exp.company}</Company>
                  <ExperienceP>{exp.description}</ExperienceP>
                  {exp.achievements && exp.achievements.map((achievement, idx) => (
                    <ExperienceP key={idx}>• {achievement}</ExperienceP>
                  ))}
                  {exp.technologies && (
                    <TechStack>
                      {exp.technologies.map((tech, idx) => (
                        <TechBadge key={idx}>{tech}</TechBadge>
                      ))}
                    </TechStack>
                  )}
                </ExperienceCard>
              </motion.div>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default ExperienceSection;
