import styled from "styled-components";

export const Wave = styled.div`
  background-color: var(--violate-light-3);
`;

export const Footer = styled.section`
  width: 100%;
  margin-top: -20px;
  padding: 2rem 1.5rem 0.5em;
  background-color: var(--violate-light-1);

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 18px;
    font-weight: 600;
    color: var(--black);
  }

  .info {
    P {
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
`;
