
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, var(--surface) 0%, var(--bg-1) 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 30%, rgba(0, 212, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const ProjectsH1 = styled.h1`
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

export const ProjectsWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 0 24px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ProjectsCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-12px);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 20px 60px rgba(0, 212, 255, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent-3) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ProjectsImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectsCard}:hover &::after {
    opacity: 1;
  }
`;

export const ProjectsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectsCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ProjectsInfo = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProjectsH2 = styled.h2`
  font-size: 22px;
  margin-bottom: 12px;
  color: var(--heading);
  font-weight: 700;
  transition: color 0.3s ease;

  ${ProjectsCard}:hover & {
    color: var(--accent);
  }
`;

export const ProjectsP = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 20px;
  flex-grow: 1;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const TechBadge = styled.span`
  padding: 6px 12px;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 12px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.15);
    transform: translateY(-2px);
  }
`;

export const ProjectsLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

export const ProjectsLink = styled.a`
  flex: 1;
  padding: 12px 24px;
  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${props => props.$primary ? `
    background: linear-gradient(135deg, var(--accent) 0%, #0099cc 100%);
    color: #021124;
    box-shadow: 0 4px 12px rgba(0, 212, 255, 0.25);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 212, 255, 0.35);
      background: linear-gradient(135deg, #00e5ff 0%, var(--accent) 100%);
    }
  ` : `
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(0, 212, 255, 0.3);
      color: var(--accent);
      transform: translateY(-2px);
    }
  `}

  &:active {
    transform: translateY(0);
  }
`;

export const ProjectBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background: rgba(255, 138, 0, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(255, 138, 0, 0.3);
`;
