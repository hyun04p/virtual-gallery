import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from 'store/webContent';
import CLogo from './CLogo';
import CMenu from './CMenu';
import icon from './Hamburger_icon.png';
import { CNavbarContainer, MenuLabel, ToggleMobileMenuBtn } from './styled';

interface props {}

const CNavbar: React.FC<props> = (props) => {
  const categories = useSelector(selectCategories());
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(categories[0]);

  const handleOnSelect = (category: string) => {
    setSelectedMenu(category);
    setOpenMenu(false);
  };

  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const isMobile = vw < 801;

  return (
    <>
      <CNavbarContainer>
        <CLogo />
        <CMenu onSelect={handleOnSelect} active={!isMobile || openMenu} />
        <ToggleMobileMenuBtn
          active={!(!isMobile || openMenu)}
          onClick={() => setOpenMenu(true)}
        >
          <div style={{ fontFamily: 'Helvetica' }}>MENU</div>
        </ToggleMobileMenuBtn>
      </CNavbarContainer>
      {isMobile ? <MenuLabel>{selectedMenu}</MenuLabel> : null}
    </>
  );
};

export default CNavbar;
