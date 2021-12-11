import React from 'react';
import CMasonryItem from './CMasonryItem';

interface props {
  cols?: number;
  width?: string;
  spacing?: string;
}

const CMasonry: React.FC<props> = (props) => {
  return <div>CMasonry</div>;
};

export { CMasonryItem };
export default CMasonry;
