
import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: var(--text);
  background: linear-gradient(180deg, var(--surface) 0%, rgba(10, 20, 32, 0.95) 100%);
  position: relative;
  padding: 80px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 700px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  gap: 48px;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
    gap: 32px;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.p`
  color: var(--accent);
  font-size: 14px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--accent) 0%, transparent 100%);
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: var(--fs-h2);
  line-height: 1.2;
  font-weight: 700;
  color: var(--heading);
  background: linear-gradient(135deg, var(--heading) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  max-width: 600px;
  margin-bottom: 35px;
  font-size: var(--fs-body);
  line-height: 1.7;
  color: var(--text);
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-3) 100%);
    border-radius: 12px;
    opacity: 0.15;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 0.25;
    transform: translate(5px, 5px);
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 70px rgba(0, 212, 255, 0.2);
  }
`;
