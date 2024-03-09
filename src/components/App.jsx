import userData from '../data/user.json';
import statisticsData from '../data/data.json';

import Section from './Section/Section';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

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
    </>
  );
};
