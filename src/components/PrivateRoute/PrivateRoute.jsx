import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem('amrUserInfo'));

    if (!user?.email) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default PrivateRoute;