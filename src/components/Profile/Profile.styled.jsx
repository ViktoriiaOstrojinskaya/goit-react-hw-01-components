import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  height: auto;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  justify-content: content;
  padding-top: ${p => p.theme.space[6]}px;
  background: ${p => p.theme.colors.snow};
`;

export const Description = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${p => p.theme.colors.gray};
`;

export const Avatar = styled.img`
  object-fit: fill;
  margin: auto;
  height: 100px;
  width: 100px;
  border-radius: ${p => p.theme.radii.round};
  padding: ${p => p.theme.space[3]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.rosyBrown}`};
`;

export const Username = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.rosyBrown};
  margin-top: ${p => p.theme.space[3]}px;
`;

export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[3]}px;
`;

export const StatsList = styled.ul`
  justify-content: space-between;
  display: flex;
  align-items: center;

  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  margin-top: ${p => p.theme.space[5]}px;
  background: ${p => p.theme.colors.rosyBrown};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const StatsListItem = styled.li`
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  border-left: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  &:first-child {
    border-left: none;
  }
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
`;
