
import React from 'react';
import {
  ProjectsContainer,
  ProjectsH1,
  SectionSubtitle,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsImgWrapper,
  ProjectsImg,
  ProjectsInfo,
  ProjectsH2,
  ProjectsP,
  TechStack,
  TechBadge,
  ProjectsLinks,
  ProjectsLink,
  ProjectBadge
} from './ProjectsElements';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Sistema de Facturación Electrónica',
      description: 'API local desarrollada con FastAPI que se interconecta con servicios externos para la emisión de facturas electrónicas en tiempo real. Incluye gestión de bases de datos SQL y NoSQL para el manejo de transacciones.',
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'FastAPI', 'MySQL', 'MongoDB', 'REST API'],
      badge: 'Featured',
      demo: '#',
      code: '#',
    },
    {
      title: 'Dashboard Analítico Web',
      description: 'Panel interactivo construido con React y TypeScript que visualiza métricas de negocio en tiempo real. Incluye gráficos dinámicos, filtros avanzados y exportación de datos a múltiples formatos.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Chart.js'],
      demo: '#',
      code: '#',
    },
    {
      title: 'E-commerce Full Stack',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos, gestión de inventario y panel de administración. Diseño responsive y optimizado para conversión.',
      img: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'CSS3'],
      demo: '#',
      code: '#',
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Proyectos Destacados</ProjectsH1>
      <SectionSubtitle>
        Soluciones innovadoras que demuestran mis habilidades técnicas y creatividad
      </SectionSubtitle>
      <ProjectsWrapper>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectsCard>
              <ProjectsImgWrapper>
                <ProjectsImg src={project.img} alt={project.title} />
                {project.badge && <ProjectBadge>{project.badge}</ProjectBadge>}
              </ProjectsImgWrapper>
              <ProjectsInfo>
                <ProjectsH2>{project.title}</ProjectsH2>
                <ProjectsP>{project.description}</ProjectsP>
                <TechStack>
                  {project.technologies.map((tech, idx) => (
                    <TechBadge key={idx}>{tech}</TechBadge>
                  ))}
                </TechStack>
                <ProjectsLinks>
                  <ProjectsLink href={project.demo} target="_blank" rel="noopener noreferrer" $primary>
                    <FiExternalLink size={16} />
                    Ver Demo
                  </ProjectsLink>
                  <ProjectsLink href={project.code} target="_blank" rel="noopener noreferrer">
                    <FiGithub size={16} />
                    Código
                  </ProjectsLink>
                </ProjectsLinks>
              </ProjectsInfo>
            </ProjectsCard>
          </motion.div>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
