import { Route, Routes } from "react-router-dom";
import { 
  About,
  AdminHome, 
  Advisors, 
  Approved, 
  AuthHome, 
  Clients, 
  CommerceIndustry, 
  Comunications, 
  Contact, 
  Coverage, 
  DataTreathment, 
  DetailSales, 
  Finances, 
  ForRentPropertiesw, 
  HelpCenter, 
  Home, 
  Immovables, 
  Leases, 
  Login, 
  Mision, 
  Pqrs, 
  PrivacyPolicy, 
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


export const AppRouter = () => {

    return (
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="immovables" element={<Immovables/>} />
          <Route exact path="sales" element={<Sales/>} />
          <Route exact path="leases" element={<Leases/>} />
          <Route exact path="list-your-property" element={<PropertyList/>} />
          <Route exact path="register" element={<Register/>} />
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
          <Route exact path="privacy-policy" element={<PrivacyPolicy />} />
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

  export const DashboardAdminRouter = () => {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(startCheckingAdmin());
    // }, [dispatch]);
      
    
    return (
      <>
      <Routes>
            <Route path="/*" element={<AdminHome />} />
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
