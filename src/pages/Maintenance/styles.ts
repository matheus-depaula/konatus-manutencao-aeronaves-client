import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;

  .wrapper {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    align-self: center;

    main {
      width: 100%;

      .list-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
          display: flex;
          align-items: center;

          font-size: 1.8rem;

          svg {
            margin: 0 0.2rem;
          }
        }

        button {
          padding: 0.4rem;

          font-weight: 700;
          border-width: 1px;
          border-radius: 0.2rem;

          transition: background 0.3s;

          &:hover {
            background: var(--white-200);
          }
        }
      }
    }
  }
`;
