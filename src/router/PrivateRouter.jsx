/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { startChecking } from "../actions/authActions";



export const PrivateRoute = ({ children }) =>{
    const user = useSelector((state) => state.auth.user);

    return (user) ? children : <Navigate to="/users/auth/login" replace />;
}
export const PrivateRouteAdmin = ({ children }) =>{
    const admin = useSelector((state) => state.authAdmin.admin);

    return (admin) ? children : <Navigate to="/admin/auth" replace />;
}
export const PrivateRouteAdvisor = ({ children }) =>{
    const advisor = useSelector((state) => state.authAdvisor.advisor);

    return (advisor) ? children : <Navigate to="/advisor/auth" replace />;
}
