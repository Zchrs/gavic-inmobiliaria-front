import styled from "styled-components";
import { AppRouter, Footer, Header } from "../../index";

export const HomeLayout = () => {
  return (
    <LayoutHome>
      <header className="homelayout-header">
        <Header />
      </header>
      <section className="homelayout-content">
        <AppRouter />
      </section>
      <footer className="homelayout-footer">
        <Footer />
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
      top : 0;
      z-index: 200;
      background: var(--bg-tertiary);
    }
    &-content {
      display: grid;
      background: var(--bg-tertiary);
    }
    &-footer {
      display: grid;
    }
  }
`;
