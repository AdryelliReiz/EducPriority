import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Header = styled.header`
  h1 {
    color: var(--black);
    font-weight: 700;
    margin: 1rem 0;
  }

  p {
    color: var(--gray-light);
    font-weight: 600;
    margin: 0;
  }
`;

export const Thumb = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  .card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    background-color: var(--violate-light-2);
    padding: 1.5rem 1rem 1rem;
    border-radius: 36px;
    //box-shadow: 1px 2px 5px var(--black);

    .header {
      h3 {
        color: var(--black);
        text-align: center;
        margin: 0.5rem;
      }
    }

    button {
      width: 200px;
      height: 50px;
      border: 0;
      border-radius: 16px;
      background-color: var(--violate);
      color: var(--violate-light-3);
      font-size: 18px;
      font-weight: 600;
      box-shadow: 1px 2px 5px var(--black);
      cursor: pointer;
      transition: 0.3s;

      :hover {
        background-color: var(--violate-dark);
        box-shadow: 1px 2px 2px var(--black);
      }
    }

    .nav-bar {
      display: flex;
      width: 100%;
      justify-content: space-around;
      background-color: var(--violate-light-1);
      border-radius: 48px;
      padding: 0.5rem 1rem;
      gap: 0;
      box-shadow: 1px 1px 5px var(--black);

      p {
        margin: 8px 0 0;
        font-weight: 600;
        color: var(--black);
      }

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }
    }
  }
`;
