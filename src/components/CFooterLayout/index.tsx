import React from 'react';
import { CFooterContainer, Logo, LogoContainer } from './styled';
import naver from './naver.png';
import insta from './instagram.png';

interface props {}

const CFooter: React.FC<props> = (props) => {
  return (
    <CFooterContainer>
      <div>All Images © Hwayoung Song</div>
      {/* <div>Design & Developed by Hyunseo Park</div> */}
      <div style={{ marginTop: '11px' }}>ann0194@hanmail.net</div>
      <LogoContainer>
        <a href="https://blog.naver.com/ann0194">
          <Logo src={naver} />
        </a>
        <a href="https://www.instagram.com/tv/CGCrOLvn3Wu/?igshid=gnzhaqpvwlp">
          <Logo src={insta} />
        </a>
      </LogoContainer>
    </CFooterContainer>
  );
};

export default CFooter;
