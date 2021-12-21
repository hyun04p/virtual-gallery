import CFooter from 'components/CFooterLayout';
import CNavbar from 'components/CNavbarLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface props {}

const Layout: React.FC<props> = (props) => {
  return (
    <div>
      <CNavbar />
      <Outlet />
      <CFooter />
    </div>
  );
};

export default Layout;
