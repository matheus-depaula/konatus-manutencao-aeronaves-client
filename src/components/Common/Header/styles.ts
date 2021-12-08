import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;

  background: var(--white);
  box-shadow: 0 0 0.5rem var(--white-200);

  @media (max-width: 375px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: flex !important;
    }
  }

  section {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;

    img {
      width: 200px;
    }

    nav {
      display: flex;
      align-items: center;

      .desktop-nav {
        a {
          font-size: 1.125rem;

          &:hover {
            color: var(--primary);
          }

          & + a {
            margin-left: 1.5rem;
          }
        }
      }

      .mobile-nav {
        position: relative;
        display: none;

        button {
          display: flex;

          font-size: 1.5rem;
          color: var(--black-900);
          background: transparent;
          border: none;
        }

        .mobile-nav-items {
          position: absolute;
          right: 0;
          top: 2.5rem;

          background: var(--white);
          box-shadow: 0 0 0.5rem var(--white-200);
          border: 1px solid var(--white-200);
          border-radius: 0.3rem;

          ul > li {
            padding: 0.5rem;
          }

          &::before {
            content: '';
            position: absolute;
            top: -0.5rem;
            right: 0.3rem;

            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-bottom: 0.5rem solid var(--white-200);
          }
        }
      }

      .active {
        color: var(--primary);
      }
    }
  }
`;
