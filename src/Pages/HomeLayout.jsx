import React from 'react';
import { Navigate } from 'react-router';

const HomeLayout = () => {
    return (
        <Navigate to='/category/1'></Navigate>
    );
};

export default HomeLayout;