import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;

  background: var(--white);
  box-shadow: 0 0 0.5rem var(--white-200);

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

      a {
        font-size: 1.125rem;

        &:hover {
          color: var(--primary);
        }

        & + a {
          margin-left: 1.5rem;
        }
      }

      .active {
        color: var(--primary);
      }
    }
  }
`;
