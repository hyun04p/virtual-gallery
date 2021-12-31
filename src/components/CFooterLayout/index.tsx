import React from 'react';
import { CFooterContainer, Logo, LogoContainer } from './styled';
import naver from './naver.png';
import insta from './instagram.png';
import sponsor from './sponsor.jpeg';

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
      <div>
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/virtual-gallery-76e7b.appspot.com/o/sponsor.jpeg?alt=media&token=004ef53c-d9dc-4a47-a3d6-9e9ef5d8542c'
          }
          style={{ width: '250px' }}
        />
      </div>
    </CFooterContainer>
  );
};

export default CFooter;
