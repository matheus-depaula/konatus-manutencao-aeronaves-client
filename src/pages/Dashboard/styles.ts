import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);

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
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
          font-size: 1.8rem;
        }
      }
    }
  }
`;
