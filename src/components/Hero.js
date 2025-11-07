
import React, { useRef, useState } from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button, ButtonSecondary } from './HeroElements';
import { motion } from 'framer-motion';
import { Avatar, HeroVideo } from './HeroElements';
import { FiDownload } from 'react-icons/fi';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  return (
    <HeroContainer id="home">
      <HeroBg>
        {!videoError && (
          <HeroVideo
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={process.env.PUBLIC_URL + '/logo192.png'}
            onCanPlay={() => {
              try {
                videoRef.current && videoRef.current.play();
                console.log('Hero video: can play and started');
              } catch (e) {
                console.warn('Hero video: play() failed', e);
              }
            }}
            onError={(e) => {
              console.error('Hero video error:', e);
              setVideoError(true);
            }}
          >
            <source src={process.env.PUBLIC_URL + '/assets/hero-bg.mp4'} type="video/mp4" />
          </HeroVideo>
        )}
        {videoError && (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/logo192.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        )}
      </HeroBg>
      <HeroContent>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <HeroH1>Hola, soy Andrés Díaz</HeroH1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
          <HeroP>Ingeniero de Software · Full Stack · Diseño de experiencias web modernas</HeroP>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}>
          <Avatar src={process.env.PUBLIC_URL + '/assets/foto.jpeg'} alt="Andrés Díaz" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}>
          <HeroBtnWrapper>
            <Button to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Ver mis proyectos
            </Button>
            <ButtonSecondary href={process.env.PUBLIC_URL + '/Curriculum_CV.pdf'} download="Andres_Diaz_CV.pdf">
              <FiDownload style={{ marginRight: '8px' }} />
              Descargar CV
            </ButtonSecondary>
          </HeroBtnWrapper>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
