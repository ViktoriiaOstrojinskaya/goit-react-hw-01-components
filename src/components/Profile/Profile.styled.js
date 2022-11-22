import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: block;
  margin-left: 40px;
  width: 100%;
  border: 1px solid black;
  justify-content: content;
  padding-top: 20px;
`;

export const Description = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
`;

export const Username = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 28px;
  color: grey;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 28px;
  color: grey;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  text-align: center;
  justify-content: space-around;
  align-self: center;
  padding: 0;
  margin-bottom: 0;
  border: 1px solid black;
`;

export const StatsListItem = styled.li`
  text-align: center;
  flex-direction: column;
  font-size: 24px;
  display: flex;
  padding: 10px;
`;
