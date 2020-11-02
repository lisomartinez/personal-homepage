import React from 'react';
import { Image, ImageContainer } from './avatar.styles';

const Avatar: React.FC = () => {
  return (
    <ImageContainer>
      <Image src="images/photo.jpg" alt="my photo" />
    </ImageContainer>
  );
};

export default Avatar;
