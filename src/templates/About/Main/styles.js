import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: var(--black);
  }

  p {
    font-size: 20px;
    color: var(--gray);
    text-align: justify;
  }

  strong {
    color: var(--violet);
  }

  .equipe {
    margin-top: 2rem;

    .contributors {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;

      .contributor-perfil {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .photo {
          width: 210px;
          border-radius: 50%;
          background-color: var(--violet);
          display: flex;
          justify-content: end;
          img {
            width: 200px;
            border-radius: 50%;
            border: 5px solid var(--gray);
          }
        }

        .details {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--black);
          font-weight: 600;
          p {
            font-size: 20px;
            text-align: center;
          }

          span {
            font-size: 18px;
            background-color: var(--violet-light-1);
            padding: 0.5em 1rem;
            border-radius: 12px;
          }
        }
      }
    }
  }

  @media (min-width: 640px) {
    .equipe {
      margin-top: 2rem;

      .contributors {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (min-width: 990px) {
    max-width: 960px;
    margin: 0 auto;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 18px;
    }

    .equipe {
      .contributors {
        .contributor-perfil {
          .details {
            p {
              font-size: 18px;
            }

            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1020px) {
    .equipe {
      margin-top: 2rem;

      .contributors {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
`;
