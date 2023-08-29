import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as IconSelected  } from 'src/assets/images/icon_checked.svg';
import { imgType } from 'src/types/home';
import { breakPoints } from 'src/utils/useBreakPoints';
import { detectTabletSize } from 'src/utils/userAgent';
import { useBodyScrollLock } from 'src/utils/useScrollLock';


const Img = ({content, closeImg, data} : imgType) => {
  const [ imgUpdate, setImgUpdate ] = useState<string>(content);
  const contentType = imgUpdate.includes('qatar') ? 'qatar' : '';
  const updateImgContent = (name: string) => {
    setImgUpdate(name);
  }
  const imgListRef = useRef<HTMLDivElement>(null)
  const getDetectTableSize = detectTabletSize();
  const { lockScroll, openScroll } = useBodyScrollLock();

  useEffect(() => {
    lockScroll();
    return () => {
      openScroll();
    }
  },[])

  // 프로젝트 ScreenButton 클릭시 scroll position 값 조정
  useEffect(() => {
    const imgList = imgListRef.current?.getElementsByClassName(imgUpdate)[0];
    if(imgListRef.current && imgList instanceof HTMLElement){
      getDetectTableSize ? imgListRef.current.scrollTo(imgList.offsetLeft - 40, 0) :
      imgListRef.current.scrollTo(0, imgList.offsetTop - 40)
    }
  },[])

  return (
    <Dimmed onClick={closeImg} className={contentType}> 
      <span className="close" onClick={closeImg} aria-label="이미지 포트폴리오 창닫기"></span>
      <ImgContainer className={contentType}>
        <picture>
          <source srcSet={`${import.meta.env.BASE_URL}images/img_${imgUpdate}.webp`} type="image/webp"/>
          <img className="main_img" src={`${import.meta.env.BASE_URL}images/img_${imgUpdate}.png`} alt="" />
        </picture>
      </ImgContainer>
      <ImgListWrap ref={imgListRef}>
      {
        data && (
          data.project.map((dataImg, idx) =>{
              return (
                dataImg.img && (
                <ImgList key={idx}>
                  {[1, 2].map((num, numIdx) => (
                  <li
                    key={numIdx}
                    className={`${dataImg.img}${num}`}  
                    onClick={() => updateImgContent(`${dataImg.img}${num}`)}>
                    <div className="img_wrap">
                      <picture>
                        <source srcSet={`${import.meta.env.BASE_URL}images/img_${dataImg.img}${num}.webp`} type="image/webp"/>
                        <img src={`${import.meta.env.BASE_URL}images/img_${dataImg.img}${num}.png`} alt=""/>
                      </picture>
                      {imgUpdate === `${dataImg.img}${num}` && <IconSelected/>}
                    </div>
                    <p>{dataImg.title}_{num}</p>
                  </li>
                  ))}
                </ImgList>
                )
              )
            }
          )
        )
      }
      </ImgListWrap>
    </Dimmed>
  );
};

export default Img;

const Dimmed = styled.div`
  display:flex;
  // align-items:center;
  align-items:flex-start;
  justify-content:center;
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
    z-index:1;
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
  &.qatar {
    .main_img {
      width:auto;
    }
  } 
  ${breakPoints.maxHeight} {
    padding: 20px;
  }
  ${breakPoints.pc} {
    &.qatar {
      .main_img {
        width:100%;
      }
    }
  }
  ${breakPoints.tablet} {
    flex-wrap:wrap;
    padding:20px;
    .close {
      background-color:rgba(0,0,0,0.5);
    }
    &.qatar {
      .main_img {
        width:100%;
      }
    }
  }
`;

const ImgContainer = styled.div`
  height:100%;
  .main_img {
    display:block;
    height:100%;
    max-height:800px;
    margin:0 16px 0 0;
    box-shadow:0 4px 4px 0 rgba(0,0,0,0.2);
    object-fit:cover;
    object-position:top;
  }

  ${breakPoints.maxHeight} {  
    .main_img {
      height:100%;
      max-width:none;
      max-height:none;
    }
  }
  ${breakPoints.pc} {  
    &.qatar {
      width:calc(100% - 320px);
    }
  }
  ${breakPoints.labtop} {
    width:auto;
    .main_img {
      width: 100%;
    }
  }
  ${breakPoints.tablet} {
    &.qatar {
      width:auto;
    }
    height:calc(100% - 200px);
    margin-bottom:10px;
  }
`;

const ImgListWrap = styled.div`
  overflow-y:auto;
  width:360px;
  height:100%;
  &::-webkit-scrollbar {
    width:6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius:6px;
    background:#222;
  }
  &::-webkit-scrollbar-track {
    background-color:#fff;
    border-radius:6px;
  }
  ${breakPoints.labtop} {
    width:178px;
  }
  ${breakPoints.tablet} {
    width:100%;
    height:180px;
    display:flex;

    overflow-y:hidden;
    overflow-x:auto;
 
  }
`;

const ImgList = styled.ul`
  display:flex;
  margin-left:10px;
  width:300px;
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
  ${breakPoints.labtop} {
    flex-wrap:wrap;
    width:150px;
    li {
      // width:100%;
    }
  }
  ${breakPoints.tablet} {
    flex-wrap:nowrap;
    width:200px;
    margin-left:0;
    li {
      width:100px;
      .img_wrap {
        img {
          height:100px;
        }
        &::before {
          height:100px;
        }
        svg {
          width:32px;
          height:32px;
        }
      }
      p {
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow:hidden;
        text-overflow:ellipsis;
        word-break:break-all;
      }
    }
  }
`;