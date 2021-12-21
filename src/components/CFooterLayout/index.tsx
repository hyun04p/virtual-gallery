import React from 'react';
import { CFooterContainer } from './styled';

interface props {}

const CFooter: React.FC<props> = (props) => {
  return (
    <CFooterContainer>
      <div>All Images © Hwayoung Song</div>
      <div>Design & Developed by Hyunseo Park</div>
    </CFooterContainer>
  );
};

export default CFooter;
