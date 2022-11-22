import styled from '@emotion/styled';

export const Section = styled.section`
  display: block;
  margin-left: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  text-align: center;
  width: 350px;
  height: auto;
`;

export const Title = styled.h2`
  text-align: center;
  padding: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.l};
  border-bottom: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
`;
export const StatList = styled.ul`
  justify-content: space-around;
  display: flex;
`;
export const StatListItem = styled.li`
  width: 45px;
  text-align: center;
  flex-direction: column;
  display: flex;
  border-left: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]}px;
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
