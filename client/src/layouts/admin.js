import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftMenu from '../components/admin/leftMenu';

function admin(props) {
    return (
        <div>
           <h1>backend content</h1>
              <LeftMenu />
              <Outlet/>
        </div>
    );
}

export default admin;