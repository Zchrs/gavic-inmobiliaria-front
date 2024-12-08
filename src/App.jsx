import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeLayout, 
  About, 
  CommerceIndustry, 
  Contact, 
  Coverage, 
  DataTreathment, 
  HelpCenter, 
  Immovables, 
  Mision, 
  Pqrs, 
  PrivacyPolicy, 
  QualityPolicy, 
  Values, 
  Vision } from "../index";

function App() {
  return (
    <section className="body">
      <HashRouter future={{ v7_startTransition: true, v7_revalidate: true }}>
        <Routes>
          <Route exact path="/*" element={<HomeLayout />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="mision" element={<Mision />} />
          <Route exact path="vision" element={<Vision />} />
          <Route exact path="immovables" element={<Immovables />} />
          <Route exact path="values" element={<Values />} />
          <Route exact path="quality-policy" element={<QualityPolicy />} />
          <Route exact path="coverage" element={<Coverage />} />
          <Route exact path="helpcenter" element={<HelpCenter />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="pqrs" element={<Pqrs />} />
          <Route exact path="privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="data-treatment" element={<DataTreathment />} />
          <Route
            exact
            path="superintendency-of-industria-and-commerce"
            element={<CommerceIndustry />}
          />
        </Routes>
      </HashRouter>
    </section>

  );

}

export default App;
