
import React, { useState } from 'react';
import {
  ContactContainer,
  ContactH1,
  SectionSubtitle,
  ContactWrapper,
  ContactInfo,
  InfoCard,
  InfoTitle,
  InfoIcon,
  InfoText,
  SocialLinks,
  SocialLink,
  ContactFormWrapper,
  ContactForm,
  FormGroup,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  ContactButton,
  NotificationContainer,
  NotificationCard,
  NotificationIcon,
  NotificationContent,
  NotificationTitle,
  NotificationMessage,
  NotificationClose
} from './ContactElements';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle, FiX, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, title, message) => {
    setNotification({ type, title, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Andrés Felipe'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      showNotification(
        'success',
        '¡Mensaje Enviado!',
        'Gracias por contactarme. Te responderé pronto.'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      showNotification(
        'error',
        'Error al Enviar',
        'Hubo un problema. Por favor intenta de nuevo o contáctame directamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <AnimatePresence>
        {notification && (
          <NotificationContainer>
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <NotificationCard type={notification.type}>
                <NotificationIcon>
                  {notification.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                </NotificationIcon>
                <NotificationContent>
                  <NotificationTitle>{notification.title}</NotificationTitle>
                  <NotificationMessage>{notification.message}</NotificationMessage>
                </NotificationContent>
                <NotificationClose onClick={() => setNotification(null)}>
                  <FiX />
                </NotificationClose>
              </NotificationCard>
            </motion.div>
          </NotificationContainer>
        )}
      </AnimatePresence>

      <ContactContainer id="contact">
        <ContactH1>Contacto</ContactH1>
        <SectionSubtitle>
          ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
        </SectionSubtitle>
        <ContactWrapper>
        <motion.div
          variants={infoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactInfo>
            <InfoCard>
              <InfoTitle>
                <InfoIcon>
                  <FiMail />
                </InfoIcon>
                Email
              </InfoTitle>
              <InfoText>
                andresfelieodiaz@gmail.com
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoTitle>
                <InfoIcon>
                  <FiMapPin />
                </InfoIcon>
                Ubicación
              </InfoTitle>
              <InfoText>
                Colombia
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoTitle>
                <InfoIcon>
                  <FiGithub />
                </InfoIcon>
                Redes Sociales
              </InfoTitle>
              <InfoText>
                Conéctate conmigo en mis redes
              </InfoText>
              <SocialLinks>
                <SocialLink href="https://github.com/vasukox" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/andres-felipe-d%C3%ADaz-bernal-875073268/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </SocialLink>
                <SocialLink href="https://x.com/FelipeB63666943" target="_blank" rel="noopener noreferrer">
                  <FiTwitter />
                </SocialLink>
              </SocialLinks>
            </InfoCard>
          </ContactInfo>
        </motion.div>

        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactFormWrapper>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <ContactLabel htmlFor="name">Nombre</ContactLabel>
                <ContactInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <ContactLabel htmlFor="email">Email</ContactLabel>
                <ContactInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="andresfelieodiaz@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <ContactLabel htmlFor="message">Mensaje</ContactLabel>
                <ContactTextarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <ContactButton type="submit" disabled={isSubmitting}>
                <FiSend />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </ContactButton>
            </ContactForm>
          </ContactFormWrapper>
        </motion.div>
      </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
