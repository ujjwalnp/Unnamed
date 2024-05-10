
import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from '../components/customer/header';
import Footer from '../components/customer/footer';

function customer(props) {
    return (
        <div>
           <Header />
           <Outlet />
           <Footer />
        </div>
    );
}

export default customer;