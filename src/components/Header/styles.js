import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  background-color: var(--violet-light-1);
  border-radius: 0 0 48px 48px;
  box-shadow: 2px 2px 10px var(--black);

  .content {
    padding: 1.5rem 2rem 2.5rem;
    h1 {
      color: var(--black);
      font-weight: 700;
      margin: 1rem 0;
    }

    p {
      font-size: 18px;
      color: var(--gray-light);
      font-weight: 600;
      margin: 0;
    }
  }

  @media (min-width: 990px) {
    border-radius: 0;

    .content {
      max-width: 960px;
      padding: 1.5rem 2rem;
      margin: 0 auto;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;
