import { Route, Routes } from "react-router-dom";
import { 
  About,
  LoginAdmin,
  AdminHome,
RegisterAdmin, 
  Advisors, 
  Appraisals, 
  Approved, 
  AuthHome, 
  CheckOut, 
  Clients, 
  CommerceIndustry, 
  Comunications, 
  Consultancies, 
  Contact, 
  Coverage, 
  DataTreathment, 
  DetailProperty, 
  DetailSales, 
  Finances, 
  ForRentPropertiesw, 
  HelpCenter, 
  Home, 
  HomeProperties, 
  Immovables, 
  Leases, 
  LocationImprovements, 
  Login, 
  Mision, 
  Mortgage, 
  Pqrs, 
  PrivPoly, 
  Properties, 
  PropertyList, 
  QualityPolicy, 
  RecentProperties, 
  Register, 
  Rejected, 
  Reports, 
  Sales, 
  Settings, 
  Statics, 
  Targets, 
  Users, 
  UserStatuses, 
  Validations, 
  Values, 
  Vision 
} from "../../index";
import { AdvisorLogin } from "../views/home/auth/AdvisorLogin";
import { AdvisorRegister } from "../views/home/auth/AdvisorRegister";
import { AuthAdvisorHome } from "../views/home/auth/AuthAdvisorHome";
import { Verify } from "../components/Verify";
import { VerifyCode } from "../components/VerifyCode";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startCheckingAdmin } from "../actions/authActions";
import { AuthHomeAdmin } from "../views/admin/auth/AuthHomeAdmin";


export const AppRouter = () => {

    return (
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="immovables" element={<Immovables/>} />
          <Route exact path="sales" element={<Sales/>} />
          <Route exact path="leases" element={<Leases/>} />
          <Route exact path="list-your-property" element={<PropertyList/>} />
          <Route exact path="client/register" element={<Register/>} />
          <Route exact path="client/login" element={<Login/>} />
          <Route exact path="advisor/register" element={<AdvisorLogin/>} />
          <Route exact path="advisor/login" element={<AdvisorLogin/>} />
          <Route exact path="coverage" element={<Coverage />} />
          <Route exact path="helpcenter" element={<HelpCenter />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="pqrs" element={<Pqrs/>} />
          <Route exact path="data-treatment" element={<DataTreathment/>} />
          <Route exact path="superintendency-of-industria-and-commerce" element={<CommerceIndustry />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="mision" element={<Mision />} />
          <Route exact path="vision" element={<Vision />} />
          <Route exact path="values" element={<Values />} />
          <Route exact path="Targets" element={<Targets />} />
          <Route exact path="quality-policy" element={<QualityPolicy />} />
          <Route exact path="privacy-policy" element={<PrivPoly />} />
          <Route exact path="mortgage" element={<Mortgage />} />
          <Route exact path="location-improvements" element={<LocationImprovements />} />
          <Route exact path="appraisals" element={<Appraisals />} />
          <Route exact path="consultancies" element={<Consultancies />} />
        </Routes>
    );
  };
  export const VerifyRouter  = () => {
    // const dispatch = useDispatch();
      
    // useEffect(() => {
    //   dispatch(startChecking());
    // }, [dispatch]);

    return (
      <Routes>
        <Route exact path="/*" element={ 
            <Verify />
      } />
      
        <Route exact path="clients/account/verify/:userId/:token" element={<VerifyCode />} />
      </Routes>
    );
  };
  export const AuthRouter = () => {
    // const dispatch = useDispatch();
      
    // useEffect(() => {
    //   dispatch(startChecking());
    // }, [dispatch]);

    return (
      <Routes>
        <Route exact path="/*" element={ 
            <AuthHome />
      } />
      
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
      </Routes>
    );
  };

  export const AuthAdvisorRouter = () => {
    // const dispatch = useDispatch();
      
    // useEffect(() => {
    //   dispatch(startChecking());
    // }, [dispatch]);

    return (
      <Routes>
        <Route exact path="/*" element={ 
            <AuthAdvisorHome />
      } />

        <Route exact path="login" element={<AdvisorLogin />} />
        <Route exact path="register" element={<AdvisorRegister />} />
      </Routes>
    );
  };
  export const AuthAdminRouter = () => {
    // const dispatch = useDispatch();
      
    // useEffect(() => {
    //   dispatch(startCheckingAdmin());
    // }, [dispatch]);

    return (
      <Routes>
        <Route exact path="/*" element={ 
            <AuthHomeAdmin />
      } />

        <Route exact path="login" element={<LoginAdmin />} />
        <Route exact path="register" element={<RegisterAdmin />} />
      </Routes>
    );
  };

  export const DashboardAdminRouter = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(startCheckingAdmin());
    }, [dispatch]);
      
    
    return (
      <>
      <Routes>
            <Route exact path="/*" element={<AdminHome />} />
            <Route exact path="sales" element={<DetailSales />} />
            <Route exact path="properties-for-rent" element={<ForRentPropertiesw />} />
            <Route exact path="recent-properties" element={<RecentProperties />} />
            <Route exact path="comunications" element={<Comunications />} />
            <Route exact path="finances" element={<Finances />} />
            <Route exact path="reports" element={<Reports />} />
            <Route exact path="statics" element={<Statics />} />
            <Route exact path="properties" element={<Properties />} />
            <Route exact path="aproved-properties" element={<Approved />} />
            <Route exact path="rejected-properties" element={<Rejected />} />
            <Route exact path="clients" element={<Clients />} />
            <Route exact path="Users" element={<Users />} />
            <Route exact path="validations" element={<Validations />} />
            <Route exact path="user-status" element={<UserStatuses/>} />
            <Route exact path="clients/advivosrs" element={<Advisors/>} />
            <Route exact path="settings" element={<Settings/>} />
      </Routes>
      </>
    );
  };

  export const PropertiesRouter = () => {
    return (
      <Routes>
        <Route exact path="/*" element={ <HomeProperties />} />       
        <Route exact path=":propertyId" element={<DetailProperty />} />
        <Route exact path=":propertyId/checkout" element={<CheckOut />} />
      </Routes>
    );
  };