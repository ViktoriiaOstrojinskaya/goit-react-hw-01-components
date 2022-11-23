import styled from '@emotion/styled';

export const Section = styled.section`
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  width: 350px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.l};
  border-bottom: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  color: ${p => p.theme.colors.dimGray};
`;

export const StatList = styled.ul`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const StatListItem = styled.li`
  width: 100%;
  text-align: center;
  flex-direction: column;
  display: flex;

  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${getRandomHexColor};

  border-left: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};

  &:first-child {
    border-left: none;
  }
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
