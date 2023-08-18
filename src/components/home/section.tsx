import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { jsonDataType, sectionType } from 'src/types/home';

const Section = ({ content, data, viewProjectImage }: sectionType) => {
  
  return (
    <>
    {
      content === 'top' && ( 
      <TopSection>
        <h1 className="big_title">💻 프론트엔드 개발을 잘하고 싶은 퍼블리셔 배영기 입니다.</h1>
        <p className="summary">
          서울에서 근무하는 4년차 퍼블리셔 입니다. 사용자의 입장에서 사용하기 좋은 페이지를 고민하고 구현합니다.<br/>
          더 나아가 데이터를 시각화 하고 비즈니스 로직을 처리하는 프론트엔드 개발자가 되기 위해 노력하겠습니다. 
        </p>
      </TopSection>
      )
    }
    {
      content === 'project' && (
       <>
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
        </>
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
        </OthersInfo>
      )
    }
    {
      content === "link" && (
        <LinkInfo>
          <li><a href="#"><h3>Blog</h3></a></li>
          <li><a href="#"><h3>Mail</h3></a></li>
          <li><a href="#"><h3>GitHub</h3></a></li>
        </LinkInfo>
      )
    }
    </>
  );
};

export default Section;

const TopSection = styled.section`
  text-align:center;
  margin:0 0 50px 0;
  .big_title {
    font-size:3.6rem;
    line-height:1.4;
    margin:0 0 10px 0;
  }
  .summary {
    font-size:1.8rem;
    line-height:1.4;
  }
`;

const SmallTitle = styled.h3`
  font-size:2rem;
  font-weight:700;
  width:100%;
  span {
    font-weight:300;
    margin:0 6px 0 0;
    color:#777;
  }
`;

const InfoList = styled.ul`
  margin: 0 0 10px 0;
  padding: 0 0 0 24px;
  li {
    line-height:1.5;
    &::before {
      content:'-';
      margin:0 4px 0 -16px;
      padding:0 0 0 8px;
    }
  }
`;

const ProjectInfo = styled.ul`
  padding:10px 0 30px 16px;
  li {
    line-height:1.5;
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
      margin:10px 0 0 8px;
      &::before {
        display:none;
      }
    }
  }
`;

const ImgButton = styled.button`
  padding:4px 8px;
  border:1px solid #ccc;
  background-color:#fff;
  margin-right:6px;
  cursor:pointer;
  &:hover {
    background-color:#f2f2f2;
  }
`;

const TechInfoWrap = styled.div`
  margin-bottom:40px;
`;

const TechInfo = styled.dl`
margin:0 0 4px 0;
line-height:1.5;
  dt {
    margin:0 0 4px 0;
  }
  dd {
    margin:0 0 4px 0;
  }
`;

const LegacyInfo = styled.ul`
  margin:0 0 40px 0;
  > li {
    h3 {
      margin: 0 0 10px 0;
    }
  }
`;

const OthersInfo = styled.ul`

`;

const LinkInfo = styled.ul`

`;