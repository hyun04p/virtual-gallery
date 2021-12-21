import React from 'react';
import { Link } from 'react-router-dom';
import { CLogoText } from './styled';

interface props {
  link?: boolean;
}

const CLogo: React.FC<props> = (props) => {
  const link = props.link === undefined ? true : props.link;
  const Logo = <CLogoText>HWAYOUNG SONG</CLogoText>;
  if (!link) return Logo;
  return <Link to="/">{Logo}</Link>;
};

export default CLogo;
