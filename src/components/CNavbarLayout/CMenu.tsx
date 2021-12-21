import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectCategories } from 'store/webContent';
import generateRoute from 'util/generatePath';
import { CMenuItem } from './styled';

interface props {}

const CMenu: React.FC<props> = (props) => {
  const categories = useSelector(selectCategories());
  let location = useLocation();

  return (
    <div>
      {categories.map((category, idx, arr) => {
        let active = false;
        if (idx === 0 && location.pathname === '/') active = true;
        if ('/' + generateRoute(category) === location.pathname) active = true;

        return (
          <Link key={category} to={generateRoute(category)}>
            <CMenuItem last={idx === arr.length - 1} active={active}>
              {category}
            </CMenuItem>
          </Link>
        );
      })}
    </div>
  );
};

export default CMenu;
