import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import { Container } from './styles';
import Logo from '../../../assets/KonatusLogo.png';

export function Header() {
  const { logout } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <Container>
      <section>
        <Link to="/">
          <img src={Logo} alt="Konatus" />
        </Link>
        <nav>
          <div className="desktop-nav">
            <Link to="/" className={'active'}>
              Dashboard
            </Link>
            <Link to="/" onClick={logout}>
              Sair
            </Link>
          </div>

          <div className="mobile-nav">
            <button onClick={handleMobileMenuClick}>
              <FaBars />
            </button>

            <div
              className="mobile-nav-items"
              style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }}
            >
              <ul>
                <li>
                  <Link to="/" className={'active'}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    Sair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </Container>
  );
}
