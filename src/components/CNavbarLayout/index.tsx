import React from 'react';
import CLogo from './CLogo';
import CMenu from './CMenu';
import { CNavbarContainer } from './styled';

interface props {}

const CNavbar: React.FC<props> = (props) => {
  return (
    <CNavbarContainer>
      <CLogo />
      <CMenu />
    </CNavbarContainer>
  );
};

export default CNavbar;
