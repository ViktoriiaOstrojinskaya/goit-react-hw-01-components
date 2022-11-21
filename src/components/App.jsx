import { Profile } from 'components/Profile/Profile';
import user from '../user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from 'components/TransactionHistory/Transactions';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '1200px',
        height: '1200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

// App.PropTypes = {
//   Profile: PropTypes.string,
// };
