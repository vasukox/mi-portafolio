
import styled from 'styled-components';

export const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
  padding: 100px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const ContactH1 = styled.h1`
  font-size: var(--fs-h2);
  color: var(--heading);
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--heading) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: var(--fs-body);
  color: var(--muted);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 1;
`;

export const ContactWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 12px 40px rgba(0, 212, 255, 0.15);
  }
`;

export const InfoTitle = styled.h3`
  font-size: 18px;
  color: var(--heading);
  margin-bottom: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 20px;
`;

export const InfoText = styled.p`
  font-size: 15px;
  color: var(--text);
  line-height: 1.6;
  margin-left: 52px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  margin-left: 52px;
`;

export const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 20px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(0, 212, 255, 0.15);
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-3px);
  }
`;

export const ContactFormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;

  @media screen and (max-width: 480px) {
    padding: 28px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 0.5px;
`;

export const ContactInput = styled.input`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  font-size: 15px;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: var(--muted);
    opacity: 0.6;
  }
`;

export const ContactTextarea = styled.textarea`
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  font-size: 15px;
  transition: all 0.3s ease;
  font-family: inherit;
  resize: vertical;
  min-height: 140px;

  &:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: var(--muted);
    opacity: 0.6;
  }
`;

export const ContactButton = styled.button`
  padding: 16px 48px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, var(--accent) 0%, #0099cc 100%);
  color: #021124;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 212, 255, 0.4);
    background: linear-gradient(135deg, #00e5ff 0%, var(--accent) 100%);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const NotificationContainer = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
  max-width: 400px;
  width: 100%;
  padding: 0 24px;

  @media screen and (max-width: 480px) {
    top: 16px;
    right: 16px;
    left: 16px;
    padding: 0;
  }
`;

export const NotificationCard = styled.div`
  background: ${props =>
    props.type === 'success'
      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%)'
      : 'linear-gradient(135deg, rgba(239, 68, 68, 0.95) 0%, rgba(220, 38, 38, 0.95) 100%)'
  };
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const NotificationIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 24px;
  color: white;
`;

export const NotificationContent = styled.div`
  flex: 1;
`;

export const NotificationTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 0 0 4px 0;
  letter-spacing: 0.3px;
`;

export const NotificationMessage = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.4;
`;

export const NotificationClose = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  width: 28px;
  height: 28px;
  border-radius: 6px;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }
`;
