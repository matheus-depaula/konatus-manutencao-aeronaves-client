import { FaKey } from 'react-icons/fa';
import { FormEvent, useState } from 'react';

import { ILoginUserDTO } from '../../useCases/User/LoginUser/LoginUserDTO';

import { useAuth } from '../../hooks/useAuth';

import { Container, Form } from './styles';
import Logo from '../../assets/KonatusLogo.png';

export function Home() {
  const { login } = useAuth();

  const [formFields, setFormFields] = useState<ILoginUserDTO>({} as ILoginUserDTO);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    login(formFields);
  }

  return (
    <Container>
      <div className="wrapper">
        <main>
          <img src={Logo} alt="Konatus" />

          <h1>
            Manutenções de <span>Aeronaves</span>
          </h1>
        </main>

        <aside>
          <h1>
            <FaKey size={20} />
            <span>Login</span>
          </h1>

          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuário"
              required
              value={formFields.login || ''}
              onChange={e => setFormFields({ ...formFields, login: e.target.value })}
            />

            <input
              type="password"
              placeholder="Senha"
              required
              value={formFields.password || ''}
              onChange={e => setFormFields({ ...formFields, password: e.target.value })}
            />

            <div>
              <button type="submit">Entrar</button>
            </div>
          </Form>
        </aside>
      </div>
    </Container>
  );
}
