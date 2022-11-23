import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  width: 500px;
`;

export const TableTableRow = styled.tr`
  &:nth-child(odd) {
    background: ${p => p.theme.colors.lightGray};
  }

  &:nth-child(even) {
    background: ${p => p.theme.colors.blanchedAlmond};
  }
`;

export const TableHeaderTitle = styled.th`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.dimGray};
  padding: ${p => p.theme.space[3]}px;
  background: ${p => p.theme.colors.snow};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.darkGray}`};
`;

export const TableData = styled.td`
  padding: ${p => p.theme.space[3]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.darkGray}`};
  text-align: center;
  color: ${p => p.theme.colors.dimGray};
  font-size: ${p => p.theme.fontSizes.s};
`;
