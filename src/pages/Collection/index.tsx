import React from 'react';
import { CollectionContainer } from './styled';
import CMasonry, { CMasonryItem } from 'components/CMasonry';
import { selectImagesByCategory } from 'store/webContent';
import { useSelector } from 'react-redux';

interface props {
  title: string;
}

const Collection: React.FC<props> = (props) => {
  const images = useSelector(selectImagesByCategory(props.title));
  if (!images) return null;
  return (
    <CollectionContainer>
      <CMasonry spacing={6} ratio={0.4}>
        {images.map((img, idx) => (
          <CMasonryItem
            data={img.data}
            width={img.width}
            height={img.height}
            key={img.data}
            type={img.type}
            category={props.title}
            index={idx}
          />
        ))}
      </CMasonry>
    </CollectionContainer>
  );
};

export default Collection;
