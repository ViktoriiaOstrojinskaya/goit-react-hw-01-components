import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  width: 250px;
  padding: ${p => p.theme.space[4]}px;
  align-items: center;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  margin-bottom: ${p => p.theme.space[3]}px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 25%);
`;

export const Status = styled.span`
  height: 15px;
  width: 15px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.red};

  background-color: ${props => (props.isOnline ? 'green' : 'false')};
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.gray};
`;
