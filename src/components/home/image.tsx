import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as SelectedIcon  } from 'src/assets/images/checked.svg';
import { imgType } from 'src/types/home';


const Img = ({content, closeImg, data} : imgType) => {
  const contentType = content.includes('qatar') ? 'qatar' : '';
  const [ imgUpdate, setImgUpdate ] = useState<string>(content);


    const updateImgContent = (name: string) => {
      setImgUpdate(name)
    }

  return (
    <Dimmed onClick={closeImg} className={contentType}> 
      <span className="close" onClick={closeImg} aria-label="이미지 포트폴리오 창닫기"></span>
      <ImgContainer>
        <picture>
          <source srcSet={`src/assets/images/img_${imgUpdate}.webp`} type="image/webp"/>
          <img className="main_img" src={`src/assets/images/img_${imgUpdate}.png`} alt="" />
        </picture>
        {/* <picture>
          <source srcSet={`src/assets/images/img_beijing1.png`} type="image/webp"/>
          <img className="main_img" src={`src/assets/images/img_beijing1.webp`} alt="" />
        </picture>         */}
      </ImgContainer>
      
      {
        data && (
          data.map((dataImg, idx) =>{
              return (
                dataImg.img && (
                <ImgList key={idx}>
                  <li onClick={() => updateImgContent(dataImg.img + '1')}>
                    <div className="img_wrap">
                      <picture>
                        <source srcSet={`src/assets/images/img_${dataImg.img}1.webp`} type="image/webp"/>
                        <img src={`src/assets/images/img_${dataImg.img}1.png`} alt=""/>
                      </picture>
                      {imgUpdate === dataImg.img + '1' && <SelectedIcon/>}
                    </div>
                    <p>{dataImg.title}_1</p>
                  </li>
                  <li onClick={() => updateImgContent(dataImg.img + '2')}>
                    <div className="img_wrap">
                      <picture>
                        <source srcSet={`src/assets/images/img_${dataImg.img}2.webp`} type="image/webp"/>
                        <img src={`src/assets/images/img_${dataImg.img}2.png`} alt=""/>
                      </picture>
                      {imgUpdate === dataImg.img + '2' && <SelectedIcon/>}
                    </div>
                    <p>{dataImg.title}_2</p>
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
    width:150px;
    margin: 4px 4px 14px 4px;
    cursor:pointer;
    &:hover {
      .img_wrap {
        &::before {
          content:'';
          background-color:rgba(0,0,0,0.4);
        }
      }
    }
    .img_wrap {
      position:relative;
      svg {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
      }
      img {
        width:100%;
        height:150px;
        object-fit:cover;
        border:2px solid #ccc;
        box-sizing:border-box;
      }
      &::before {
        content:'';
        display:block;
        width:100%;
        height:150px;
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.6);
      }
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