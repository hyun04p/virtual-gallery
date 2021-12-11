import CNavbar from 'components/CNavbarLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface props {}

const Layout: React.FC<props> = (props) => {
  console.log(props.children);
  return (
    <div>
      <CNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
