import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { api } from '../../../../lib/axios';
import { Loading } from '../../../../components/Loading';

import { Avatar, ProfileContainer, Title, Info } from './styles';

interface User {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function Profile() {
  const [user, setUser] = useState({} as User);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const username = 'brunobecoski';
  
  async function fetchUser() {
    const { data } = await api.get(`users/${username}`);
    const { login, avatar_url, html_url, name, company, bio, followers } = data;

    setUser({
      avatar_url,
      name,
      html_url,
      bio,
      login,
      company,
      followers,
    });

    setIsLoadingUser(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoadingUser) {
    return <Loading />
  }

  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url}/>
      <div>
        <Title>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Title>

        <p>{user.bio}</p>

        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </div>
        </Info>
      </div>
    </ProfileContainer>
  );
}