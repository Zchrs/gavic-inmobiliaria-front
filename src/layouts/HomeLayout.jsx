import styled from "styled-components";
import { AppRouter } from "../../index";

export const HomeLayout = () => {
  return (
    <LayoutHome>
      <header className="homelayout-header">

      </header>
      <section className="homelayout-container">
        <AppRouter />
      </section>
      <footer className="homelayout-footer">

      </footer>
    </LayoutHome>
  );
};
const LayoutHome = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: start;
  .homelayout {
    display: grid;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    &-header {
      display: grid;
    }
    &-content {
      display: grid;
    }
    &-footer {
      display: grid;
    }
  }
`;
