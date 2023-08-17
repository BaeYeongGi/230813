import styled from '@emotion/styled';
import { jsonDataType, sectionType } from 'src/types/home';


const Section = ({ content, projectData, viewProjectImage, legacyData }: sectionType) => {
  console.log(legacyData)
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
        projectData && (
          projectData.map((contents:jsonDataType, dataIdx:number) => (
            <div key={dataIdx}>
              <SmallTitle><span>{contents.since}</span>{contents.title}</SmallTitle>
              <ProjectInfo>
                {
                  contents.list.map((cnts, listIdx:number) => (
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
        <TechInfo>
          <dt><SmallTitle>Javascript</SmallTitle></dt>
          <dd>ES2015를 포함한 문법을 활용하며 최신 동향을 꾸준히 살피고 학습합니다.</dd>
          <dt><SmallTitle>Typescript</SmallTitle></dt>
          <dd>정적 타입 언어를 활용하여 Javascript 개발을 하는 것을 지향합니다.</dd>
          <dt><SmallTitle>React</SmallTitle></dt>
          <dd>기본적인 React Hook을 활용한 SPA개발이 가능합니다.</dd>
          <dt><SmallTitle>Webpack Gulp</SmallTitle></dt>
          <dd>빌드툴을 이용하여 중복코드 & 반복작업을 최소화 하여 산출물 관리가 가능합니다.</dd>
          <dt><SmallTitle>Html css scss css-in-js</SmallTitle></dt>
          <dd>웹 표준과 접근성을 고려한 문서 작성이 가능하고 다양한 스타일링에 익숙합니다.</dd>
          <dt><SmallTitle>Git Github SVN</SmallTitle></dt>
          <dd>git을 이용한 형상 관리가 가능합니다.</dd>
        </TechInfo>
      )
    }
    {
      content === "legacy" && (
        <LegacyInfo>
          {
            legacyData && (
              legacyData.map((contents:jsonDataType, dataIdx:number) => (
                <li key={dataIdx}><SmallTitle>{contents.title}</SmallTitle>
                  <InfoList>
                    {
                      contents.list.map((cnts, listIdx:number) => (
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

        </OthersInfo>
      )
    }
    {
      content === "link" && (
        <LinkInfo>
          
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

const TechInfo = styled.dl`
margin:0 0 40px 0;
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