
import React from 'react';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './AboutElements';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <TopLine>Sobre Mí</TopLine>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                  <Heading>Apasionado por la tecnología y el desarrollo de software</Heading>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                >
                  <Subtitle>Soy Ingeniero de Sistemas con experiencia en el desarrollo de aplicaciones web y en la integración de soluciones avanzadas de automatización impulsadas por IA. Combino diseño de interfaces y arquitectura backend para construir productos escalables: desde integraciones con APIs y pipelines de datos hasta automatizaciones que optimizan procesos y mejoran la toma de decisiones. Trabajo con herramientas modernas y un enfoque orientado al impacto de negocio, entregando soluciones robustas, seguras y fáciles de mantener.</Subtitle>
                </motion.div>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Desarrollo de software" />
                </motion.div>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
