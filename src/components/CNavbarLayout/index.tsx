import React from 'react';
import CLogo from './CLogo';
import CMenu from './CMenu';

interface props {}

const CNavbar: React.FC<props> = (props) => {
  return (
    <nav>
      <CLogo />
      <CMenu />
    </nav>
  );
};

export default CNavbar;
