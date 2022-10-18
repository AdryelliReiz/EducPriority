import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 220px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

    background-color: var(--violet-light-2);
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
      background-color: var(--violet);
      color: var(--violet-light-3);
      font-size: 18px;
      font-weight: 600;
      box-shadow: 1px 2px 5px var(--black);
      cursor: pointer;
      transition: 0.3s;

      :hover {
        background-color: var(--violet-dark);
        box-shadow: 1px 2px 2px var(--black);
      }
    }

    .nav-bar {
      display: flex;
      width: 100%;
      justify-content: space-around;
      background-color: var(--violet-light-1);
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
