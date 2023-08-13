import React from 'react';
import styled from '@emotion/styled';

interface ImgType {
  content: string;
}

const Img = ({content} : ImgType) => {

  return (
    <ImgContainer>
      <picture>
        <source srcSet={`src/assets/images/img_${content}.png`} type="image/webp"/>
        <img src={`src/assets/images/img_${content}.webp`} alt="카타르 월드컵 메인페이지" />
      </picture>
    </ImgContainer>
  );
};

export default Img;

const ImgContainer = styled.div`
`;

