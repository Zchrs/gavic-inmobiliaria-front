/* eslint-disable no-unused-vars */
import { HashRouter, Route, Routes } from "react-router-dom";
import "./app.css";
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
  PrivPoly,
  QualityPolicy,
  Values,
  Vision,
  PropertyList,
  Leases,
  Sales,
  Register,
  Login,
  AuthLayout,
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
  DetailSales,
  Mortgage,
  LocationImprovements,
  Appraisals,
  Consultancies,
  DetailProperty,
  CheckOut,
  LoginAdmin,
  RegisterAdmin,
  AdvisorDashboardLayout,
  UserDashboardLayout,
  SectionsComponent,
} from "../index";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Blocked } from "./components/Blocked";
import { AdvisorLogin } from "./views/home/auth/AdvisorLogin";
import { AdvisorRegister } from "./views/home/auth/AdvisorRegister";
import { AuthAdvisorLayout } from "./layouts/AuthAdvisorLayout";
import { PropertiesLayout } from "./layouts/PropertiesLayout";
import { Verify } from "./components/Verify";
import { VerifyCode } from "./components/VerifyCode";
import { PrivateRoute, PrivateRouteAdmin, PrivateRouteAdvisor } from "./router/PrivateRouter";
import { AuthAdminLayout } from "./layouts/AuthAdminLayout";
import { PublicRoute, PublicRouteAdmin, PublicRouteAdvisor } from "./router/PublicRouter";
import { HomeRecovery } from "./components/HomeRecovery";
import { RecoveryPasshordHome } from "./components/RecoveryPasshordHome";

function App() {
  const isBlocked = (e) => {
    true, e.preventDefault();
  };
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
              <Route exact path="sales" element={<Sales />} />
              <Route exact path="leases" element={<Leases />} />
              <Route
                exact
                path="list-your-property"
                element={<PropertyList />}
              />
              <Route exact path="client/register" element={<Register />} />
              <Route exact path="client/login" element={<Login />} />
              <Route exact path="advisor/register" element={<AdvisorLogin />} />
              <Route exact path="advisor/login" element={<AdvisorLogin />} />
              <Route exact path="coverage" element={<Coverage />} />
              <Route exact path="helpcenter" element={<HelpCenter />} />
              <Route exact path="contact" element={<Contact />} />
              <Route exact path="pqrs" element={<Pqrs />} />
              <Route exact path="privacy-policy" element={<PrivPoly />} />
              <Route exact path="data-treatment" element={<DataTreathment />} />
              <Route
                exact
                path="superintendency-of-industria-and-commerce"
                element={<CommerceIndustry />}
              />
            </Route>
            <Route
              exact
              path="/auth/client/*"
              element={
              <PublicRoute>
                <AuthLayout />
              </PublicRoute>
              }>
              <Route exact path="login" element={<Login />} />
              <Route exact path="register" element={<Register />} />
            </Route>
                        <Route
              path="/client/dashboard/*"
              element={
               <PrivateRoute>
                  <UserDashboardLayout />
               </PrivateRoute> 
              }>
              
              <Route exact path="sales" element={<DetailSales />} />
              <Route exact path="profile" element={<DetailSales />} />
              <Route exact path="finances" element={<Finances />} />
              <Route exact path="reports" element={<Reports />} />
              <Route exact path="statics" element={<Statics />} />
              <Route exact path="properties" element={<Properties />} />
              <Route exact path="clients" element={<Clients />} />
              
              <Route exact path="settings" element={<Settings/>} />
            </Route>

            <Route exact path="/advisor/auth/*" element={
              <PublicRouteAdvisor>
                <AuthAdvisorLayout />
              </PublicRouteAdvisor>
          }>
              <Route exact path="login" element={<AdvisorLogin />} />
              <Route exact path="register" element={<AdvisorRegister />} />
            </Route>

            <Route
              path="/advisor/dashboard/*"
              element={
                <PrivateRouteAdvisor>
                  <AdvisorDashboardLayout />
                </PrivateRouteAdvisor>
              }>
              
              <Route exact path="profile" element={<SectionsComponent />} />
              <Route exact path="finances" element={<SectionsComponent />} />
              <Route exact path="reports" element={<Reports />} />
              <Route exact path="statics" element={<Statics />} />
              <Route exact path="properties" element={<Properties />} />
              <Route exact path="clients" element={<SectionsComponent />} />
              <Route exact path="sales" element={<DetailSales />} />
              <Route exact path="leased" element={<Properties />} />
              <Route exact path="settings" element={<Settings/>} />
            </Route>

            
            <Route exact path="/admin/auth/*" element={
              <PublicRouteAdmin>
                <AuthAdminLayout />
              </PublicRouteAdmin>
          }>
              <Route exact path="login" element={<LoginAdmin />} />
              <Route exact path="register" element={<RegisterAdmin />} />
            </Route>


            <Route
              path="/admin/dashboard/*"
              element={
                <PrivateRouteAdmin>
                  <AdminDashboardLayout />
                </PrivateRouteAdmin>
              }>
              <Route exact path="sales" element={<DetailSales />} />
              <Route
                exact
                path="properties-for-rent"
                element={<ForRentPropertiesw />}
              />
              <Route
                exact
                path="recent-properties"
                element={<RecentProperties />}
              />
              <Route exact path="comunications" element={<Comunications />} />
              <Route exact path="finances" element={<Finances />} />
              <Route exact path="reports" element={<Reports />} />
              <Route exact path="statics" element={<Statics />} />
              <Route
                exact
                path="pending-upload-properties"
                element={<Pending />}
              />
              <Route exact path="aproved-properties" element={<Approved />} />
              <Route exact path="rejected-properties" element={<Rejected />} />
              <Route exact path="clients" element={<Clients />} />
              <Route exact path="Users" element={<Users />} />
              <Route exact path="validations" element={<Validations />} />
              <Route exact path="user-status" element={<UserStatuses />} />
              <Route exact path="clients/advivosrs" element={<Advisors />} />
              <Route exact path="settings" element={<Settings />} />
              <Route exact path="properties" element={<Properties />} />
              <Route exact path="mortgage" element={<Mortgage />} />
              <Route
                exact
                path="location-improvements"
                element={<LocationImprovements />}
              />
              <Route exact path="appraisals" element={<Appraisals />} />
              <Route exact path="consultancies" element={<Consultancies />} />
            </Route>

            <Route exact path="/properties/*" element={<PropertiesLayout />}>
              <Route exact path=":propertyId" element={<DetailProperty />} />
              <Route exact path=":propertyId/checkout" element={<CheckOut />} />
            </Route>

            {!isBlocked && <Route path="/bloqueado" element={<Blocked />} />}

            <Route exact path="/*" element={<Verify />}>
              <Route
                exact
                path="clients/account/verify/:userId/:token"
                element={<VerifyCode />}
              />
            </Route>
            <Route exact path="/*" element={<Verify />}>
              <Route
                exact
                path="advisors/account/verify/:advisorId/:token"
                element={<VerifyCode />}
              />
            </Route>

            <Route exact path="/recovery-account/*" element={
              <HomeRecovery />}
              >
              <Route exact path="recovery-password" element={<RecoveryPasshordHome />} />
              <Route exact path="recovery-send-code" element={<CheckOut />} />
            </Route>
          </Routes>
        </Provider>
      </HashRouter>
    </section>
  );
}

export default App;
