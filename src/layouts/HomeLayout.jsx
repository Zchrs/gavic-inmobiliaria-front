import styled from "styled-components";
import { AppRouter, Footer, Header } from "../../index";
// import { VisitorsTracker } from "../components/VisitorsTracker";

export const HomeLayout = () => {
  return (
    <LayoutHome>
      <header className="homelayout-header">
        <Header />
      </header>
      <section className="homelayout-content">
        <AppRouter />
        {/* <div className="homelayout-content-visitors">
        </div> */}
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
  max-width: 1920px;
  margin: auto;
  .homelayout {
    display: grid;
    max-width: 1920px;
    height: 100%;
    min-height: 100vh;
    &-header {
      display: grid;
      top : 0;
      z-index: 200;
      background: var(--bg-tertiary);
    }
    &-content {
      align-items: start;
      display: grid;
      background: var(--bg-tertiary);

      &-visitors{
        display: grid;
        position: fixed;
        width: fit-content;
        height: 150px;
        z-index: 200;
        bottom: 10px;
        left: 10px;
      }
    }
    &-footer {
      display: grid;
      background: var(--bg-tertiary);
    }
  }
`;
