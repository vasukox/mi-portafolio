
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiSupabase, SiNestjs, SiDjango, SiGithub, SiAstro } from 'react-icons/si';
import { TechnologiesContainer, TechnologiesH1, TechnologiesIntro, Grid, CategoryCard, CategoryTitle, ItemsGrid, Item, IconWrapper, ItemLabel } from './TechnologiesElements';
import { motion } from 'framer-motion';

const TechnologiesSection = () => {
  const categories = [
    {
      title: 'Lenguajes de Programación',
      items: [
        { label: 'Python', icon: <FaPython /> },
        { label: 'JavaScript', icon: <SiJavascript /> },
        { label: 'PHP', icon: <FaPhp /> },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { label: 'React.js', icon: <FaReact /> },
        { label: 'Astro', icon: <SiAstro /> },
      ],
    },
    {
      title: 'Backend',
      items: [
        { label: 'NestJs', icon: <SiNestjs /> },
        { label: 'Django', icon: <SiDjango /> },
        { label: 'RESTful APIs', icon: <FaNodeJs /> },
      ],
    },
    {
      title: 'Bases de Datos',
      items: [
        { label: 'PostgreSQL', icon: <SiPostgresql /> },
        { label: 'MySQL', icon: <SiMysql /> },
        { label: 'SQL Server', icon: <SiMicrosoftsqlserver /> },
        { label: 'Supabase', icon: <SiSupabase /> },
      ],
    },
    {
      title: 'Data Engineering',
      items: [
        { label: 'ETL Pipelines', icon: <FaDatabase /> },
        { label: 'Data Warehousing', icon: <FaDatabase /> },
        { label: 'Transformación de Datos', icon: <FaDatabase /> },
      ],
    },
    {
      title: 'Infraestructura & DevOps',
      items: [
        { label: 'Docker', icon: <FaDocker /> },
        { label: 'Git', icon: <FaGitAlt /> },
        { label: 'GitHub', icon: <SiGithub /> },
        { label: 'CI/CD', icon: <FaGitAlt /> },
      ],
    },
    {
      title: 'Automatización & IA',
      items: [
        { label: 'n8n', icon: <FaNodeJs /> },
        { label: 'IA Conversacional', icon: <FaNodeJs /> },
        { label: 'Chatbots', icon: <FaNodeJs /> },
      ],
    },
    {
      title: 'Metodologías',
      items: [
        { label: 'SCRUM', icon: <FaGitAlt /> },
        { label: 'Agile', icon: <FaGitAlt /> },
        { label: 'Clean Architecture', icon: <FaGitAlt /> },
      ],
    },
    {
      title: 'Aprendiendo',
      items: [
        { label: 'Análisis de Datos', icon: <FaDatabase /> },
        { label: 'DevOps', icon: <FaDocker /> },
      ],
    },
  ];

  return (
    <TechnologiesContainer id="technologies">
      <div className="container">
        <TechnologiesH1>Tecnologías</TechnologiesH1>
        <TechnologiesIntro>En mi viaje por el mundo del desarrollo web, he cultivado experiencia y habilidades en una variedad de tecnologías. Mi stack tecnológico incluye:</TechnologiesIntro>
        <Grid>
          {categories.map((cat, idx) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.12 }}>
              <CategoryCard>
                <CategoryTitle>{cat.title}</CategoryTitle>
                <ItemsGrid>
                  {cat.items.map((it, i) => (
                    <Item key={i}>
                      <IconWrapper>{it.icon}</IconWrapper>
                      <ItemLabel>{it.label}</ItemLabel>
                    </Item>
                  ))}
                </ItemsGrid>
              </CategoryCard>
            </motion.div>
          ))}
        </Grid>
      </div>
    </TechnologiesContainer>
  );
};

export default TechnologiesSection;
