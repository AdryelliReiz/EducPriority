import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1.5rem 2rem 2.5rem;
  background-color: var(--violet-light-1);
  border-radius: 0 0 48px 48px;
  box-shadow: 1px 2px 5px var(--black);
  //border-bottom: 3px solid var(--violet);

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
`;
