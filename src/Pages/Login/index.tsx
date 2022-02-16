import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../Components/Button';
import { useAuth } from '../../Hooks/auth';
import './styles.css';

export default function Login() {
  const { setUserData } = useAuth();
  const navigate = useNavigate();

  const emailValueRef = useRef('');
  const passwordValueRef = useRef('');

  function handleSubmmit() {
    const emailIsValid =
      /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
        emailValueRef.current
      );

    if (!emailIsValid) {
      alert('E-mail inválido!');
      return;
    }

    if (
      emailValueRef.current === 'teste@teste.com' &&
      passwordValueRef.current === '123456'
    ) {
      const userData = {
        id: v4(),
        email: emailValueRef.current,
        name: 'Usuário teste',
      };

      setUserData(userData);
      navigate('/home');
      return;
    }

    alert('Usuário e/ou senha incorreto(s)!');
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="input-container">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite um e-mail..."
            onChange={(event) => {
              emailValueRef.current = event.target.value;
            }}
          />
        </div>
        <div className="input-container">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite a senha..."
            onChange={(event) => {
              passwordValueRef.current = event.target.value;
            }}
          />
        </div>
        <Button onClick={handleSubmmit}>Entrar</Button>
      </div>
    </div>
  );
}