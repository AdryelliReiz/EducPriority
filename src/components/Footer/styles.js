import styled from "styled-components";

export const Wave = styled.div``;

export const Footer = styled.section`
  width: 100%;
  padding: 3rem 1.5rem 0.5em;
  background-color: var(--violet-light-1);

  .content {
    .links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: 18px;
      font-weight: 600;
      color: var(--black);
    }
  }

  .info {
    margin-top: 2rem;
    p {
      font-size: 18px;
      width: 100%;
      color: var(--gray);
      text-align: center;

      ::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--gray-light);
        margin-bottom: 8px;
      }
    }
  }

  @media (min-width: 990px) {
    border-radius: 0;

    .content {
      max-width: 960px;
      margin: 0 auto;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;
