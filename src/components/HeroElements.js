
import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid rgba(0,212,255,0.3);
  object-fit: cover;
  margin-top: 24px;
  margin-bottom: 8px;
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.4), 0 10px 30px rgba(3,18,36,0.6);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(0, 212, 255, 0.6), 0 15px 40px rgba(3,18,36,0.8);
    border-color: rgba(0,212,255,0.5);
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const HeroH1 = styled.h1`
  color: var(--heading);
  font-size: var(--fs-h1);
  text-align: center;
  font-weight: 700;
  letter-spacing: -1px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: var(--muted);
  font-size: var(--fs-lead);
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: linear-gradient(135deg, var(--accent) 0%, #0099cc 100%);
  white-space: nowrap;
  padding: 16px 48px;
  color: #021124;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 212, 255, 0.4);
    background: linear-gradient(135deg, #00e5ff 0%, var(--accent) 100%);
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 14px 36px;
  }
`;

export const ButtonSecondary = styled.a`
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 2px solid var(--accent);
  white-space: nowrap;
  padding: 14px 40px;
  color: var(--text);
  font-size: 18px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    background: rgba(0, 212, 255, 0.15);
    border-color: #00e5ff;
    color: #00e5ff;
    box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 12px 32px;
  }
`;
