import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectCategories } from 'store/webContent';
import generateRoute from 'util/generatePath';
import { CMenuItem, MenuContainer } from './styled';

interface props {
  onSelect: (category: string) => void;
  active: boolean;
}

const CMenu: React.FC<props> = (props) => {
  const categories = useSelector(selectCategories());
  let location = useLocation();

  useEffect(() => {
    categories.forEach((category, idx, arr) => {
      let active = false;
      if (idx === 0 && location.pathname === '/') props.onSelect(categories[0]);
      else if ('/' + generateRoute(category) === location.pathname)
        props.onSelect(category);
    });
  }, []);

  const onSelectMenu = (name: string) => () => {
    props.onSelect(name);
  };

  return (
    <MenuContainer active={props.active}>
      {categories.map((category, idx, arr) => {
        let active = false;
        if (idx === 0 && location.pathname === '/') active = true;
        if ('/' + generateRoute(category) === location.pathname) active = true;

        return (
          <Link key={category} to={generateRoute(category)}>
            <CMenuItem active={active} onClick={onSelectMenu(category)}>
              {category}
            </CMenuItem>
          </Link>
        );
      })}
      <Link key={'about'} to={'about'}>
        <CMenuItem
          active={location.pathname === '/about'}
          onClick={onSelectMenu('ABOUT')}
        >
          ABOUT
        </CMenuItem>
      </Link>
      <Link key={'contact'} to={'contact'}>
        <CMenuItem
          last={true}
          active={location.pathname === '/contact'}
          onClick={onSelectMenu('CONTACT')}
        >
          CONTACT
        </CMenuItem>
      </Link>
    </MenuContainer>
  );
};

export default CMenu;
