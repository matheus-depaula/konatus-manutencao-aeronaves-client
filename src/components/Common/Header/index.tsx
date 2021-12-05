import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import { Container } from './styles';
import Logo from '../../../assets/KonatusLogo.png';

export function Header() {
  const { logout } = useAuth();

  return (
    <Container>
      <section>
        <img src={Logo} alt="Konatus" />
        <nav>
          <Link to="/" className={'active'}>
            Dashboard
          </Link>
          <Link to="#" onClick={logout}>
            Sair
          </Link>
        </nav>
      </section>
    </Container>
  );
}
