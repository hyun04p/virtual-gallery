import CFooter from 'components/CFooterLayout';
import CNavbar from 'components/CNavbarLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './styled';

interface props {}

const Layout: React.FC<props> = (props) => {
  return (
    <LayoutContainer>
      <CNavbar />
      <Outlet />
      <CFooter />
    </LayoutContainer>
  );
};

export default Layout;
