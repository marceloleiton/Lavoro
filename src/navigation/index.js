import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
import Router from './Router';


const Providers =() =>{
    return(
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
}

export default Providers;