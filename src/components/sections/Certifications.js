
import React from 'react';
import {
  CertificationsContainer,
  CertificationsH1,
  SectionSubtitle,
  CertificationsWrapper,
  CertificationsGrid,
  CertificationCard,
  CertificationIcon,
  CertificationTitle,
  CertificationIssuer,
  CertificationDescription,
  CertificationBadge
} from '../CertificationsElements';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaLinux } from 'react-icons/fa';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco Systems',
      description: 'Validación de habilidades en instalación, configuración y solución de problemas de redes. Certificación que demuestra competencia en fundamentos de redes, acceso a redes, conectividad IP, servicios IP, fundamentos de seguridad y automatización.',
      icon: <FaNetworkWired />,
      badge: 'Networking'
    },
    {
      title: 'Linux Essentials',
      issuer: 'Cisco Networking Academy',
      description: 'Acreditación de conocimientos en administración y uso del sistema operativo Linux. Cubre línea de comandos, gestión de archivos, permisos, scripts básicos y navegación en entornos Linux.',
      icon: <FaLinux />,
      badge: 'Linux'
    }
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <CertificationsContainer id="certifications">
      <CertificationsH1>Certificaciones</CertificationsH1>
      <SectionSubtitle>
        Formación continua y validación de conocimientos técnicos
      </SectionSubtitle>
      <CertificationsWrapper>
        <CertificationsGrid>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CertificationCard>
                <CertificationIcon>
                  {cert.icon}
                </CertificationIcon>
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                <CertificationDescription>{cert.description}</CertificationDescription>
                <CertificationBadge>{cert.badge}</CertificationBadge>
              </CertificationCard>
            </motion.div>
          ))}
        </CertificationsGrid>
      </CertificationsWrapper>
    </CertificationsContainer>
  );
};

export default CertificationsSection;
