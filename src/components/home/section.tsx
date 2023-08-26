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
      content === 'top' && ( 
      <TopSection>
        <h1 className="big_title">🧑‍💻배영기 이력서</h1>
        <p className="summary">
          서울에서 근무하는 소프트웨어 엔지니어 입니다. 사용자의 입장에서 사용하기 좋은 페이지를 고민하고 구현합니다.<br/>
          더 나아가 데이터를 시각화 하고 비즈니스 로직을 처리하는 프론트엔드 개발도 함께 익히겠습니다. 
        </p>
      </TopSection>
      )
    }
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
                  contents.img && (
                    <li className="img_button_wrap">
                      <ImgButton onClick={() => viewProjectImage?.(`${contents.img}1`)}>First Screen</ImgButton>
                      <ImgButton onClick={() => viewProjectImage?.(`${contents.img}2`)}>Second Screen</ImgButton>
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
          <li><h3>slack, outlook 업무용 메신저를 사용한 비동기 커뮤니케이션에 익숙합니다.</h3></li>
          <li><h3>confluence, jira 협업 툴 사용에 익숩합니다.</h3></li>
          <li><h3>소나큐브 코드품질 관리 분석도구를 통해 불필요한 코드와 버그 & 코드스멜을 수정할 수 있습니다.</h3></li>
          <li><h3>항상 배워야 한다는 자세로 임하며, 업무에 필요한 기술이 있다면 학습하여 활용하도록 노력하겠습니다.</h3></li>
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


const TopSection = styled.section`
  text-align:center;
  margin:50px 0 0 0;
  .big_title {
    font-size:3.6rem;
    line-height:1.4;
    margin:0 0 10px 0;
    color:${props => props.theme.fontColor};
  }
  .summary {
    font-size:1.8rem;
    line-height:1.4;
    color:${props => props.theme.fontColor};
  }
`;

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
    &::before{
      content:'-';
      margin:0 4px 0 0;
    }
    h3 {
      display:inline-block;
      vertical-align:top;
      font-weight:normal;
      color:${props => props.theme.fontColor};
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