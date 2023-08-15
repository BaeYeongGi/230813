import React from 'react';
import styled from '@emotion/styled';
import { imgType } from 'src/types/home';


const Img = ({content, closeImg, data} : imgType) => {
  console.log('data', content)
  return (
    <Dimmed onClick={closeImg}> 
      <span className="close"></span>
      <ImgContainer>
        <picture>
          <source srcSet={`src/assets/images/img_${content}.png`} type="image/webp"/>
          <img className="main_img" src={`src/assets/images/img_${content}.webp`} alt="" />
        </picture>
        {/* <picture>
          <source srcSet={`src/assets/images/img_beijing1.png`} type="image/webp"/>
          <img className="main_img" src={`src/assets/images/img_beijing1.webp`} alt="" />
        </picture>         */}
      </ImgContainer>
      
      {
        data && (
          data.map((content, idx) =>{
              return (
              content.img && (
                <ImgList key={idx}>
                  <li>
                    <source srcSet={`src/assets/images/img_${content.img}1.png`} type="image/webp"/>
                    <img src={`src/assets/images/img_${content.img}1.webp`} alt=""/>
                    <p>{content.title}</p>
                  </li>
                  <li>
                    <source srcSet={`src/assets/images/img_${content.img}2.png`} type="image/webp"/>
                    <img src={`src/assets/images/img_${content.img}2.webp`} alt=""/>
                    <p>{content.title}</p>
                  </li>
                </ImgList>
                )
              )
            }
          )
        )
      }
      
       

    </Dimmed>
  );
};

export default Img;

const Dimmed = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.7);
  padding:40px;
  box-sizing:border-box;
  z-index:1;
  .close {
    position:absolute;
    top:20px;
    right:20px;
    width:40px;
    height:40px;
    cursor:pointer;
    &::before, &::after {
      content:'';
      display:block;
      position:absolute;
      top:20px;
      width:100%;
      height:2px;
      background-color:#fff;
    }
    &::before {
      left:0;
      transform:rotate(45deg);
    }
    &::after {
      left:0;
      transform:rotate(135deg);
    }    

  }
`;

const ImgContainer = styled.div`
  .main_img {
    display:block;
    max-width:1400px;
    max-height:800px;
    box-shadow:0 4px 4px 0 rgba(0,0,0,0.2);
  }
`;

const ImgList = styled.ul`
  // display:flex;
  // flex-wrap:wrap;
  // width:300px;
  // height:50px;
  margin-left:10px;
  li {
    width:140px;
    margin: 4px 4px 14px 4px;
    cursor:pointer;
    &:hover {
      img {
        border-color:#0000d1;
      }      

    }
    img {
      width:100%;
      height:140px;
      object-fit:cover;
      border:2px solid #ccc;
      box-sizing:border-box;
    }
    p {
      line-height:1.2;
      min-height:40px;
      text-align:center;
      color:#fff;
      font-size:1.6rem;
      word-break:keep-all;
    }
  }
`;