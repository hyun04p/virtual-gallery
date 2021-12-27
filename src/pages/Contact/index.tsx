import React from 'react';
import { useSelector } from 'react-redux';
import { selectContact } from 'store/webContent';
import { ContactContainer } from './styled';

interface props {}

const Contact: React.FC<props> = (props) => {
  const content: string = useSelector(selectContact());
  return (
    <ContactContainer
      dangerouslySetInnerHTML={{ __html: content }}
    ></ContactContainer>
  );
};

export default Contact;
