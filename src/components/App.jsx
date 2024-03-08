import userData from '../data/user.json';

import Section from './Section/Section';
import Profile from './Profile/Profile';

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
    </>
  );
};
