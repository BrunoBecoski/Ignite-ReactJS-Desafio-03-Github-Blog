import { useEffect, useState } from 'react';

import { api } from '../../lib/axios';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';


import { HomeContainer, Cards } from './styles';
import { Loading } from '../../components/Loading';

interface UserInfo {
  avatarUrl: string;
  login: string;
}

export function Home() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  async function fetchUsers() {
    const { data } = await api.get(`/search/users?q=${search}`);
    
    const users = data.items.map((user: any) => {
    return {
      avatarUrl: user.avatar_url,
      login: user.login
    }}
    )

    setUsers(users);
    setIsLoadingUsers(false);
  }

  useEffect(() => {
    if(isFirstRender) {
      setIsFirstRender(false);
    } else {
      setIsLoadingUsers(true);
      const timeout = setTimeout(async () => {
        await fetchUsers();
      }, 3000);
  
      return () => clearTimeout(timeout);
    }
  }, [search]);

  return (
    <HomeContainer>
      <Banner
        home={{
          title: 'Pesquise por alguma conta do Github'
        }}
      />
      
      <Input
        placeholder="Buscar conta"
        onChange={event => setSearch(event.target.value)}  
      />

      <Cards>
        {
          isLoadingUsers 
          ? 
            <>
              <Loading />
              <Loading />
            </>
          :
            users.map(user => 
              <Card 
                key={user.login}
                user={user}
              />
            )
        }
      </Cards>
    </HomeContainer>
  );
}