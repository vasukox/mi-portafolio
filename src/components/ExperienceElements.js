
import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(10, 20, 32, 0.95) 0%, var(--bg-2) 100%);
  padding: 100px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const ExperienceH1 = styled.h1`
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

export const ExperienceWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;

export const Timeline = styled.div`
  position: relative;
  padding: 40px 0;

  /* Línea vertical central */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, transparent 0%, var(--accent) 20%, var(--accent) 80%, transparent 100%);
    transform: translateX(-50%);
  }

  @media screen and (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.$isLeft ? 'flex-end' : 'flex-start'};
  padding-right: ${props => props.$isLeft ? '50%' : '0'};
  padding-left: ${props => props.$isLeft ? '0' : '50%'};
  margin-bottom: 60px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-right: 0;
    padding-left: 80px;
    justify-content: flex-start;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  transform: translateX(-50%);
  box-shadow: 0 0 0 6px rgba(0, 212, 255, 0.2), 0 0 20px rgba(0, 212, 255, 0.4);
  z-index: 2;

  @media screen and (max-width: 768px) {
    left: 30px;
  }
`;

export const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  width: calc(100% - 60px);
  margin-right: ${props => props.$isLeft ? '60px' : '0'};
  margin-left: ${props => props.$isLeft ? '0' : '60px'};

  /* Flecha hacia el centro */
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    ${props => props.$isLeft ? 'right: -15px;' : 'left: -15px;'}
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${props => props.$isLeft ? '10px 0 10px 15px' : '10px 15px 10px 0'};
    border-color: ${props => props.$isLeft ? 'transparent transparent transparent rgba(0, 212, 255, 0.1)' : 'transparent rgba(0, 212, 255, 0.1) transparent transparent'};
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 12px 40px rgba(0, 212, 255, 0.2);
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;

    &::before {
      left: -15px;
      right: auto;
      border-width: 10px 15px 10px 0;
      border-color: transparent rgba(0, 212, 255, 0.1) transparent transparent;
    }
  }
`;

export const DateBadge = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  color: var(--accent);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
`;

export const ExperienceH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: var(--heading);
  font-weight: 700;
`;

export const Company = styled.h3`
  font-size: 18px;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 16px;
`;

export const ExperienceP = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 16px;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const TechBadge = styled.span`
  padding: 6px 14px;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }
`;
