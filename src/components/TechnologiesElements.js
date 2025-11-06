
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
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0.01));
  border-radius: 12px;
  padding: 20px;
  /* sombras más suaves para evitar efecto de banda oscura cuando muchas tarjetas se agrupan */
  box-shadow: 0 4px 14px rgba(3,18,36,0.35) inset, 0 6px 18px rgba(3,18,36,0.28);
`;

export const CategoryTitle = styled.h3`
  margin: 0 0 16px 0;
  color: var(--accent-2);
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 6px;
  border-radius: 10px;
  background: transparent;
  transition: transform 0.15s ease;

  &:hover { transform: translateY(-6px); }
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
  font-size: 28px;
  color: #e6faff;
`;

export const ItemLabel = styled.div`
  font-size: var(--fs-body);
  color: var(--muted);
  text-align: center;
`;
