import React from 'react';
import {
  CMaonryItemImg,
  CMasonryItemContainer,
  CMasonryItemVideo,
} from './styled';

interface props {
  data: string;
  alt?: string;
  width: number;
  height: number;
  type: string;
  openModal?: any;
  realHeight?: number;
  index: number;
  category: string;
}

const CMasonryItem: React.FC<props> = (props) => {
  let content = null;
  if (props.type === 'image')
    content = <CMaonryItemImg src={props.data} alt={props.alt || ''} />;
  if (props.type === 'text') content = <div>{props.data}</div>;
  if (props.type === 'video')
    content = (
      <CMasonryItemVideo
        height={props.realHeight || 0}
        width={(props.width / props.height) * (props.realHeight || 0)}
        dangerouslySetInnerHTML={{ __html: props.data }}
      ></CMasonryItemVideo>
    );

  const toggleModal = () => {
    console.log(props.category, props.index);
    props.openModal(props.type, props.category, props.index);
  };

  return (
    <CMasonryItemContainer onClick={toggleModal} type={props.type}>
      {content}
    </CMasonryItemContainer>
  );
};

export default CMasonryItem;
