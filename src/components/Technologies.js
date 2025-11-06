
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql, SiTypescript, SiVisualstudiocode, SiNpm } from 'react-icons/si';
import { TechnologiesContainer, TechnologiesH1, TechnologiesIntro, Grid, CategoryCard, CategoryTitle, ItemsGrid, Item, IconWrapper, ItemLabel } from './TechnologiesElements';
import { motion } from 'framer-motion';

const TechnologiesSection = () => {
  const categories = [
    {
      title: 'Frontend',
      items: [
        { label: 'HTML5', icon: <SiHtml5 /> },
        { label: 'CSS3', icon: <SiCss3 /> },
        { label: 'JavaScript', icon: <SiJavascript /> },
        { label: 'ReactJS', icon: <FaReact /> },
        { label: 'TypeScript', icon: <SiTypescript /> },
        { label: 'Figma', icon: <FaGitAlt /> },
      ],
    },
    {
      title: 'Backend',
      items: [
        { label: 'Node.js', icon: <FaNodeJs /> },
        { label: 'Express', icon: <FaNodeJs /> },
        { label: 'MySQL', icon: <SiMysql /> },
        { label: 'MongoDB', icon: <SiMongodb /> },
        { label: 'Next.js', icon: <FaReact /> },
      ],
    },
    {
      title: 'Aprendiendo',
      items: [
        { label: 'Python', icon: <FaPython /> },
        { label: 'Astro', icon: <FaReact /> },
        { label: 'Docker', icon: <FaDocker /> },
        { label: 'TypeScript', icon: <SiTypescript /> },
      ],
    },
    {
      title: 'Herramientas',
      items: [
        { label: 'Git', icon: <FaGitAlt /> },
  { label: 'VSCode', icon: <SiVisualstudiocode /> },
        { label: 'npm', icon: <SiNpm /> },
        { label: 'Terminal', icon: <FaGitAlt /> },
        { label: 'GitHub', icon: <FaGitAlt /> },
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
