import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { 
  HomeLayout, 
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
  Vision, 
  PropertyList,
  Leases,
  Sales,
  Register,
  // PublicRoute,
  Login,
  AuthLayout,
  LeasedProperties,
  ForRentPropertiesw,
  RecentProperties,
  Comunications,
  Finances,
  Reports,
  Statics,
  Pending,
  Approved,
  Rejected,
  Clients,
  Validations,
  UserStatuses,
  Advisors,
  Settings,
  AdminDashboardLayout,
  Targets,
  Users,
  Properties,
  } from "../index";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <section className="body">
      <HashRouter>
        <Provider store={store}>
          <Routes>
            <Route exact path="/*" element={<HomeLayout />}>
            <Route exact path="about" element={<About />} />
              <Route exact path="mision" element={<Mision />} />
              <Route exact path="vision" element={<Vision />} />
              <Route exact path="values" element={<Values />} />
              <Route exact path="Targets" element={<Targets />} />
              <Route exact path="quality-policy" element={<QualityPolicy />} />
            

            <Route exact path="immovables" element={<Immovables />} />
            <Route exact path="sales" element={<Sales/>} />
            <Route exact path="leases" element={<Leases/>} />
            <Route exact path="list-your-property" element={<PropertyList/>} />
            <Route exact path="register" element={<Register/>} />
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
            </Route>
            <Route exact path="/auth/*" element={
              //  <PublicRoute>
                <AuthLayout />
               //</PublicRoute>
          }>
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            </Route>

            <Route path="/admin/dashboard/*" element={<AdminDashboardLayout />} >
              <Route exact path="leased-properties" element={<LeasedProperties />} />
              <Route exact path="properties-for-rent" element={<ForRentPropertiesw />} />
              <Route exact path="recent-properties" element={<RecentProperties />} />
              <Route exact path="comunications" element={<Comunications />} />
              <Route exact path="finances" element={<Finances />} />
              <Route exact path="reports" element={<Reports />} />
              <Route exact path="statics" element={<Statics />} />
              <Route exact path="pending-upload-properties" element={<Pending />} />
              <Route exact path="aproved-properties" element={<Approved />} />
              <Route exact path="rejected-properties" element={<Rejected />} />
              <Route exact path="clients" element={<Clients />} />
              <Route exact path="Users" element={<Users />} />
              <Route exact path="validations" element={<Validations />} />
              <Route exact path="user-status" element={<UserStatuses/>} />
              <Route exact path="clients/advivosrs" element={<Advisors/>} />
              <Route exact path="settings" element={<Settings/>} />
              <Route exact path="properties" element={<Properties />} />
          </Route>

          </Routes>
        </Provider>
      </HashRouter>
    </section>

  );

}

export default App;
