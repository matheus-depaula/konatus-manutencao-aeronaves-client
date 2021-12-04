import { useLocation } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';
import Logo from '../../assets/KonatusLogo.png';

export function Header() {
  const { pathname } = useLocation();
  const { logout } = useAuth();

  return (
    <Container>
      <section>
        <img src={Logo} alt="Konatus" />
        <nav>
          <a href="/" className={pathname === '/' && 'active'}>
            Dashboard
          </a>
          <a href="#" onClick={logout}>
            Sair
          </a>
        </nav>
      </section>
    </Container>
  );
}
