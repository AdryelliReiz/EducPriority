import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 2rem;

  @media (min-width: 990px) {
    max-width: 960px;
    margin: 0 auto;
  }

  .content {
    h3 {
      font-size: 1.5rem;
      color: var(--black);
    }

    p + h3,
    ul + h3 {
      margin-top: 3rem;
    }

    h4 {
      font-size: 1.2rem;
      color: var(--black);
    }

    p {
      font-size: 18px;
      color: var(--gray);
      text-align: justify;
    }

    strong {
      color: var(--violet);
    }

    ul {
      //list-style: none;
      padding: 0;
    }

    a {
      font-size: 20px;
      color: var(--violet);

      :hover {
        text-decoration: underline;
      }
    }

    .image {
      display: flex;
      justify-content: center;
    }
  }

  .allow {
    cursor: pointer;
  }
  .not-allow {
    cursor: not-allowed;
  }

  .other-links {
    margin-top: 3rem;
    h3 {
      font-size: 1.5rem;
      color: var(--black);
    }
    .link {
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
`;
