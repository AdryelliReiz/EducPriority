import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    color: var(--black);
  }

  .quests-container {
    .quest {
      & + .quest {
        margin-top: 3rem;
      }
      .quest-header {
        h3 {
          background-color: var(--violet-light-1);
          padding: 4px 16px;
          border-radius: 8px;
          color: var(--black);
        }
      }

      .quest-content {
        p {
          color: var(--gray);
          font-size: 20px;
          text-align: justify;
        }
      }

      .quest-alternatives {
        margin-top: 1rem;

        .alternative {
          color: var(--gray);
          font-size: 20px;

          & + div {
            margin-top: 0.5rem;
          }
        }
      }

      .quest-response {
        margin-top: 2rem;
        display: flex;
        justify-content: center;

        a {
          background-color: var(--violet-light-1);
          padding: 12px 24px;
          border-radius: 16px;
          font-size: 20px;
          color: var(--violet-dark);
          font-weight: 600;
          box-shadow: 2px 2px 10px var(--black);
        }
      }
    }
  }

  .response-container {
    margin-top: 6rem;
    .response {
      p {
        color: var(--gray);
        font-size: 20px;

        span {
          background-color: var(--violet-light-1);
          padding: 4px 8px;
          border-radius: 8px;
        }
      }
    }
  }

  @media (min-width: 990px) {
    max-width: 960px;
    margin: 0 auto;

    h2 {
      font-size: 1.2rem;
    }

    .quests-container {
      .quest {
        .quest-header {
          h3 {
            font-size: 18px;
          }
        }
        .quest-content {
          p {
            font-size: 16px;
          }
        }

        .quest-alternatives {
          .alternative {
            font-size: 16px;
          }
        }

        .quest-response {
          margin-top: 2rem;
          display: flex;
          justify-content: center;

          a {
            padding: 8px 12px;
            font-size: 18px;
          }
        }
      }
    }

    .response-container {
      .response {
        p {
          font-size: 16px;
        }
      }
    }
  }
`;
