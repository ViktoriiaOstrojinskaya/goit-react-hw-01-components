import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin-left: ${p => p.theme.space[5]}px;

  width: 250px;
  height: auto;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  justify-content: content;
  padding-top: ${p => p.theme.space[6]}px;
`;

export const Description = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  object-fit: fill;
  margin: auto;
  height: 100px;
  width: 100px;
  border-radius: ${p => p.theme.radii.round};
  padding: ${p => p.theme.space[3]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
`;

export const Username = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[5]}px;
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.gray};
  margin-top: ${p => p.theme.space[3]}px;
`;

export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.gray};
  margin-top: ${p => p.theme.space[3]}px;
`;

export const StatsList = styled.ul`
  justify-content: space-around;
  display: flex;

  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  margin-top: ${p => p.theme.space[6]}px;
  background: ${p => p.theme.colors.lightGray};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const StatsListItem = styled.li`
  width: 60px;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  display: flex;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  border-left: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  &:first-child {
    border-left: none;
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.gray};
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
