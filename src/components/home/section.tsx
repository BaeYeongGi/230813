import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as IconGithub  } from 'src/assets/images/icon_github.svg';
import { ReactComponent as IconBlog  } from 'src/assets/images/icon_blog.svg';
import { ReactComponent as IconEmail  } from 'src/assets/images/icon_email.svg';
import { jsonDataType, sectionType } from 'src/types/home';
import { breakPoints } from 'src/utils/useBreakPoints';

const Section = ({ content, data, viewProjectImage }: sectionType) => {
  
  return (
    <>
    {
      content === 'project' && (
       <ProjectWrap>
       {
        data?.project && (
          data.project.map((contents:jsonDataType, dataIdx:number) => (
            <div key={dataIdx}>
              <SmallTitle><span>{contents.since}</span>{contents.title}</SmallTitle>
              <ProjectInfo>
                {
                  contents.list?.map((cnts, listIdx:number) => (
                    <li key={listIdx}>{cnts}</li>
                  ))
                }
                {
                  contents.img && viewProjectImage && (
                    <li className="img_button_wrap">
                      <ImgButton onClick={() => viewProjectImage(`${contents.img}1`)}>First Screen</ImgButton>
                      <ImgButton onClick={() => viewProjectImage(`${contents.img}2`)}>Second Screen</ImgButton>
                    </li>
                  )
                }
              </ProjectInfo>
            </div>
          ))
        )
       }
        </ProjectWrap>
      )
    }
    {
      content === "tech" && (      
       <TechInfoWrap>
          {
            data?.tech && (
              data.tech.map((contents:jsonDataType, dataIdx:number) => (
                <TechInfo key={dataIdx}>
                  <dt><SmallTitle>{contents.title}</SmallTitle></dt>
                  <dd>{contents.text}</dd>
                </TechInfo>
              ))
            )
          }
      </TechInfoWrap>
      )
    }
    {
      content === "legacy" && (
        <LegacyInfo>
          {
            data?.legacy && (
              data.legacy.map((contents:jsonDataType, dataIdx:number) => (
                <li key={dataIdx}><SmallTitle>{contents.title}</SmallTitle>
                  <InfoList>
                    {
                      contents.list?.map((cnts, listIdx:number) => (
                        <li key={listIdx}>{cnts}</li>
                      ))
                    }
                  </InfoList>
                </li>
              ))
            )
          }
        </LegacyInfo>
      )
    }
    {
      content === "others" && (
        <OthersInfo>
          {
            data?.others && (
              data.others.map((contents:jsonDataType, dataIdx:number) => (
                <li key={dataIdx}><h3>{contents.title}</h3></li>
              ))
            )
          }
        </OthersInfo>
      )
    }
    {
      content === "link" && (
        <LinkInfo>
          <li><a href="https://github.com/baeyeonggi" target="blank"><IconGithub/><h3>GitHub</h3></a></li>
          <li><a href="https://blog.naver.com/byk5913" target="blank"><IconBlog/><h3>Blog</h3></a></li>
          <li><a href="mailto:byg5913@gmail.com"><IconEmail/><h3>Mail</h3></a></li>

        </LinkInfo>
      )
    }
    </>
  );
};

export default Section;

const SmallTitle = styled.h3`
  font-size:2.2rem;
  font-weight:700;
  width:100%;
  color:${props => props.theme.fontColor};
  span {
    font-weight:300;
    margin:0 6px 0 0;
    color:${props => props.theme.fontSubColor};
  }
  ${breakPoints.tablet}{
    line-height:1.5;
  }
`;

const InfoList = styled.ul`
  margin: 0 0 20px 0;
  padding: 0 0 0 24px;
  li {
    line-height:1.5;
    color:${props => props.theme.fontColor};
    &::before {
      content:'-';
      margin:0 4px 0 -16px;
      padding:0 0 0 8px;
    }
  }
`;

const ProjectWrap = styled.div`
  > div {
    >
    &:last-child {
      > ul {
        padding-bottom:0;
      }
    }
    &:not(:last-child) {
      border-bottom:1px solid #ddd;
      margin-bottom:20px;
    }
  }
`;

const ProjectInfo = styled.ul`
  padding:10px 0 24px 16px;
  display:flex;
  flex-wrap:wrap;
  li {
    width:50%;
    line-height:1.5;
    font-size:1.6rem;
    color:${props => props.theme.fontColor};
    &::before {
      content:'-';
      margin:0 4px 0 0;
    }
    a {
      text-decoration:underline;
      color:#3838ca;
      font-weight:700;
    }
    &.img_button_wrap {
      width:100%;
      margin:10px 0 0 8px;
      &::before {
        display:none;
      }
    }
  }
  ${breakPoints.tablet} {
    li {
      width:100%;
    }
  }
`;

const ImgButton = styled.button`
  padding:4px 8px;
  border:1px solid #ccc;
  background-color:${props => props.theme.bgColor};
  margin-right:6px;
  cursor:pointer;
  color:${props => props.theme.fontColor};
  &:hover {
    background-color:${props => props.theme.hoverColor};
  }
`;

const TechInfoWrap = styled.div`
  margin-bottom:40px;
  > dl {
    &:last-child {
      margin-bottom:0;
    }
    &:not(:last-child){
      border-bottom:1px solid #ddd;
      padding-bottom:16px;
    }
    dd {
      color:${props => props.theme.fontColor};
    }
  }
`;

const TechInfo = styled.dl`
margin:0 0 12px 0;
line-height:1.5;
  dt {
    margin:0 0 4px 0;
  }
  dd {
    font-size:1.6rem;
  }
`;

const LegacyInfo = styled.ul`

  > li {
    font-size:1.6rem;
    &:not(:last-child) {
      border-bottom:1px solid #ddd;
      margin:0 0 20px 0;
    }
    h3 {
      margin: 0 0 10px 0;
    }
  }
`;

const OthersInfo = styled.ul`
  > li {
    line-height:1.5;
    position:relative;
    padding-left:12px;
    color:${props => props.theme.fontColor};
    &::before{
      content:'-';
      margin:0 4px 0 0;
      position:absolute;
      top:0px;
      left:0;
    }
    h3 {
      display:inline-block;
      vertical-align:top;
      font-weight:normal;
    }
  }
`;

const LinkInfo = styled.ul`
  display:flex;
  margin-bottom:100px;
  > li {
    margin-right:6px;
    &:hover {
      > a {
        background-color:${props => props.theme.hoverColor};
      }
    }
    > a {
      display:block;
      text-align:center;
      width:80px;
      padding:10px 0;
      border:1px solid #666;
      border-radius:4px;
      svg {
        stroke:${props => props.theme.fontColor};
      }
      h3 {
        width:100%;
        margin:0 0 0 0;
        font-size:1.6rem;
        color:#000;
        font-weight:400; 
        color:${props => props.theme.fontColor};
      }
    }
  }
`;