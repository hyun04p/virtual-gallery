import React from 'react';
import { useSelector } from 'react-redux';
import { selectAbout } from 'store/webContent';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { AboutContainer } from './styled';

interface props {}

const About: React.FC<props> = (props) => {
  const content: string = useSelector(selectAbout());
  return (
    <AboutContainer
      dangerouslySetInnerHTML={{ __html: content }}
    ></AboutContainer>
  );
};

export default About;
