import { useEffect, useMemo, useRef, useState } from 'react';
import Menu from '../../Components/Menu';
import './styles.css';

type UserProfileProps = {
  name: string;
  bio: string;
  followers: number;
  following: number;
}

interface RepositoryProps {
  id: number;
  name: string;
}

export default function GitHubProfile() {
  const [userName, setUserName] = useState('')
  const [loadingUserProfile, setLoadingUserProfile] = useState(true) 
  const [userProfile, setUserProfile] = useState<UserProfileProps>()
  const [loadingRepositories, setLoadingRepositories] = useState(true)
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])

  const repositoriesCount =useMemo(() => {
    //aqui pode ir qualquer codigo para gerar o resultado
    return repositories.length
  }, [repositories])

  const userNameValueRef =useRef('')

  // useeffect é Semelhante com componentDidMount.
  // Ocorre somente quando o componente é exibido em tela
  useEffect(() => {
    if (!userName) return
    async function getUserProfile (userName: string) {
      setLoadingUserProfile(true)
      const response = await fetch(
        `https://api.github.com/users/${userName}`, { method: 'get',
      })
      const user = await response.json();
      setLoadingUserProfile(false);
      setUserProfile(user);
    }

    async function getUserRepositories(userName: string) {
      setLoadingRepositories(true);
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const userRepositories = await response.json();
      setLoadingRepositories(false);
      setRepositories(userRepositories);
    }

    getUserProfile(userName);
    getUserRepositories(userName);

    // tem o mesmo comprotamento que o componentWillUnMount
    return () => {
      console.log('Desmontagem');
    };
  }, [userName]);

  return (
    <>
      <Menu />
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite um usuário"
          onChange={(event) => {
            userNameValueRef.current = event.target.value;
          }}
        />
        <button
          onClick={() => {
            setUserName(userNameValueRef.current);
          }}
        > Enviar
        </button>
      </div>
      <h1>Github Profile</h1>
      {loadingUserProfile ? (
        <h3>Carregando perfil...</h3>
      ) : (
        <div className="github-profile-infos-container">
          <div className="github-profile-info">
            <label>Nome: </label>
            <p>{userProfile?.name}</p>
          </div>
          <div className="github-profile-info">
            <label>Followers: </label>
            <p>{userProfile?.followers}</p>
          </div>
          <div className="github-profile-info">
            <label>Following: </label>
            <p>{userProfile?.following}</p>
          </div>
          <div className="github-profile-info">
            <label>Bio: </label>
            <p>{userProfile?.bio}</p>
          </div>
        </div>
      )}
      <h2>Repositórios</h2>
      {loadingRepositories ? (
        <h3>Carregando repositórios...</h3>
      ) : (
        <div className="github-repositories-container">
          <ul>
            {repositories.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <span>Count: {repositoriesCount}</span>
        </div>
      )}
    </>
  );
}