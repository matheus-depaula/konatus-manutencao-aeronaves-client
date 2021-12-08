import styled from 'styled-components';

interface IContainer {
  status: number;
  canClick: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  margin: 1rem 0;
  padding: 0.75rem;

  background: var(--white);
  box-shadow: 0 0 0.5rem var(--white-200);
  border-radius: 0.3rem;

  cursor: ${props => (props.canClick ? 'pointer' : 'default')};
  overflow: hidden;

  .card {
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      h3 {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        div {
          width: 2.5rem;
          display: flex;
          justify-content: center;

          svg {
            margin-right: 0.5rem;
          }
        }
      }

      div {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        .status {
          color: ${props => (props.status === 0 ? '#ec6c04' : '#42c242')};

          user-select: none;
        }

        svg {
          margin-left: 0.5rem;

          font-size: 1.25rem;
        }
      }
    }

    .card-expanded {
      padding: 1rem 0.5rem 0 0.5rem;

      button {
        margin-bottom: 1rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;

        background: var(--white-100);
        border: 1px solid var(--white-300);
        border-radius: 0.2rem;

        transition: background 0.2s;

        svg {
          margin-right: 0.3rem;
        }

        &:hover {
          background: var(--white-200);
        }
      }

      .image-container {
        display: grid;
        place-items: center;
        position: relative;
      }
    }
  }
`;
