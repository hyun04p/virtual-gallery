import React from 'react';

interface props {
  src: string;
  alt?: string;
}

const CMasonryItem: React.FC<props> = (props) => {
  // if (!props.alt) console.warn("[CMasonryItem] 'alt?' not provided.");
  return <img src={props.src} alt={props.alt || ''} />;
};

export default CMasonryItem;
