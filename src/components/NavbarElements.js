
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(7, 20, 40, 0.85);
  backdrop-filter: blur(12px) saturate(1.2);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 48px;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    padding: 0 24px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkS)`
  color: var(--text);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent) 0%, #00a0cc 100%);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &.active::after {
    width: 80%;
  }

  &:hover {
    color: var(--accent);
  }

  &:hover::after {
    width: 80%;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: linear-gradient(135deg, var(--accent) 0%, #0099cc 100%);
  white-space: nowrap;
  padding: 12px 28px;
  color: #021124;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.4);
    background: linear-gradient(135deg, #00e5ff 0%, var(--accent) 100%);
  }

  &:active {
    transform: translateY(0);
  }
`;
