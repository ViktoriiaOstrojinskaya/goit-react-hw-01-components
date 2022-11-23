import styled from '@emotion/styled';

export const FriendTable = styled.ul`
  margin-left: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
`;

export const FriendCard = styled.li`
  display: flex;
  width: 250px;
  padding: ${p => p.theme.space[3]}px;
  align-items: center;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const setBgColor = props => {
  switch (props.isOnline) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
  }
};

export const Status = styled.span`
  height: 15px;
  width: 15px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[3]}px;
  background-color: yellow;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  object-fit: contain;
  margin-right: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.dimGray}`};
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
`;

// const setStatus = p => {
//   switch (p.isOnline) {
//     case 'true':
//       return 'green';
//     case 'false':
//       return 'green';
//     default:
//       return 'yellow';
//   }
// };
