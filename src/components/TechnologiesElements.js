
import styled from 'styled-components';

export const TechnologiesContainer = styled.section`
  padding: 80px 0;
  /* usar el mismo gradiente del body para evitar bandas oscuras debajo */
  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
  color: #fff;
`;

export const TechnologiesH1 = styled.h1`
  font-size: var(--fs-h2);
  margin-bottom: 8px;
`;

export const TechnologiesIntro = styled.p`
  color: var(--muted);
  margin-bottom: 32px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const CategoryCard = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.008));
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 4px 14px rgba(3,18,36,0.3) inset, 0 2px 8px rgba(3,18,36,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 14px rgba(3,18,36,0.35) inset, 0 8px 20px rgba(3,18,36,0.3);
  }
`;

export const CategoryTitle = styled.h3`
  margin: 0 0 20px 0;
  color: var(--accent-2);
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 2px solid rgba(255,255,255,0.1);
  padding-bottom: 12px;
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 12px;
  align-items: start;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.03);
  transition: all 0.2s ease;
  min-height: 100px;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.04);
    border-color: rgba(255,255,255,0.08);
  }
`;

export const IconBox = styled.div`
  width: 86px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(2,12,28,0.45);
  box-shadow: 0 6px 18px rgba(3,18,36,0.45) inset;
  margin-bottom: 10px;
`;

export const IconWrapper = styled.div`
  font-size: 32px;
  color: var(--accent-2);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemLabel = styled.div`
  font-size: 0.85rem;
  color: #e0e0e0;
  text-align: center;
  font-weight: 500;
  line-height: 1.3;
`;
