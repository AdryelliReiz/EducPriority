import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 2rem;

  @media (min-width: 990px) {
    max-width: 960px;
    margin: 0 auto;
  }
`;

export const Main = styled.main`
  .list-section {
    margin-bottom: 2rem;
    h3 {
      font-size: 1.5rem;
      color: var(--black);
    }

    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        .allow {
          cursor: pointer;
        }
        .not-allow {
          cursor: not-allowed;
        }

        .content {
          background: var(--violet-light-2);
          padding: 1rem 1.5rem;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;

          p {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--black);
          }
        }
      }
    }
  }
`;

export const Menu = styled.div`
  background: var(--violet-light-1);
  position: fixed;
  z-index: 9;

  width: 100%;
  height: 75vh;
  bottom: 0;
  padding: 2rem;
  border-radius: 36px 36px 0 0;
  box-shadow: 1px -2px 10px var(--black);
  transition: 0.3s;

  .topics {
    .topic {
      h3 {
        font-size: 1.5rem;
        color: var(--black);
      }

      ul {
        list-style: none;

        li {
          font-size: 20px;

          color: var(--gray);
          a {
            color: var(--violet);
            text-decoration: underline;
          }
        }

        .not-allow {
          text-decoration: line-through;
        }
      }
    }
  }

  button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;

    background-color: var(--violet-dark);
    padding: 1rem;
    border: none;
    border-radius: 16px;

    display: flex;

    box-shadow: 1px 2px 10px var(--black);
    cursor: pointer;
    transition: 0.3s;

    :hover {
      box-shadow: 1px 2px 5px var(--black);
    }
  }
`;
