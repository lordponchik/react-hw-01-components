import userData from '../data/user.json';
import statisticsData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

import Section from './Section/Section';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section title="Profile">
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        ></Profile>
      </Section>
      <Section title="Statistics">
        <Statistics title="Upload stats" stats={statisticsData}></Statistics>
      </Section>
      <Section title="FriendList">
        <FriendList friends={friendsData}></FriendList>
      </Section>
      <Section title="TransactionHistory">
        <TransactionHistory items={transactionsData}></TransactionHistory>
      </Section>
    </>
  );
};
