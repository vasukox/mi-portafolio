
import styled from 'styled-components';

export const CertificationsContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, var(--bg-2) 0%, var(--surface) 100%);
  padding: 100px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 50%, rgba(0, 212, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const CertificationsH1 = styled.h1`
  font-size: var(--fs-h2);
  color: var(--heading);
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--heading) 0%, var(--accent-2) 100%);
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

export const CertificationsWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;

export const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 32px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const CertificationCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 138, 0, 0.15);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-2) 0%, var(--accent) 100%);
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 138, 0, 0.3);
    box-shadow: 0 16px 48px rgba(255, 138, 0, 0.15);
  }
`;

export const CertificationIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 138, 0, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: var(--accent-2);
  border: 1px solid rgba(255, 138, 0, 0.3);
`;

export const CertificationTitle = styled.h2`
  font-size: 20px;
  color: var(--heading);
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.3;
`;

export const CertificationIssuer = styled.h3`
  font-size: 16px;
  color: var(--accent-2);
  font-weight: 600;
  margin-bottom: 16px;
`;

export const CertificationDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 0;
`;

export const CertificationBadge = styled.div`
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255, 138, 0, 0.1);
  border: 1px solid rgba(255, 138, 0, 0.3);
  border-radius: 16px;
  color: var(--accent-2);
  font-size: 13px;
  font-weight: 600;
  margin-top: 16px;
  letter-spacing: 0.5px;
`;
