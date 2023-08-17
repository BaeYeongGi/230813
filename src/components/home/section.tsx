import styled from '@emotion/styled';
import { projectDataType, sectionType } from 'src/types/home';


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
        data && (
          data.map((contents:projectDataType, dataIdx:number) => (
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
          <dt><SmallTitle>Html CSS SCSS CSS-in-js</SmallTitle></dt>
          <dd>웹 표준과 접근성을 고려한 문서 작성이 가능하고 다양한 스타일링에 익숙합니다.</dd>
          <dt><SmallTitle>Git Github SVN</SmallTitle></dt>
          <dd>git을 이용한 형상 관리가 가능합니다.</dd>
        </TechInfo>
      )
    }
    {
      content === "legacy" && (
        <LegacyInfo>
          <li><SmallTitle>기존 CSS에 의존하던 프로젝트에 SCSS를 도입하였습니다.</SmallTitle>
            <ul> 
              <li>중복된 선택자와 코드를 최소화 하였습니다.</li>
              <li>추후 유지보수를 위해 가독성을 높였습니다.</li>
            </ul>
          </li>
          <li><SmallTitle>웹 최적화를 통해 페이지 렌더링 속도를 개선하였습니다.</SmallTitle>
            <ul>
              <li>Light House 지표를 통해 LCP 수치를 최적화 하였습니다.</li>
              <li>라이브러리 의존도를 낮추고 가능한 script 작성을 통해 구현하였습니다.</li>
              <li>css, js 문서의 용량을 줄이기 위해 minified 옵션을 적용하였습니다.</li>
            </ul>            
          </li>
          <li><SmallTitle>검색엔진 최적화에 신경썼습니다.</SmallTitle>
            <ul>
              <li>목적에 맞는 태그를 사용하였습니다.</li>
              <li>meta description, title 내용을 개선하였습니다.</li>
              <li>robots.txt, sitemap.xml 에 유효한 값을 제공하였습니다.</li>
              <li>이미지 영역에 유효한 값을 제공하였습니다.</li>
            </ul>
          </li>
          <li><SmallTitle>크로스 브라우징 이슈를 능동적으로 대처하였습니다.</SmallTitle>
            <ul>
              <li>IE, Chrome, Edge, Android, IOS, Mac, Windows</li>
              <li>브라우저, 모바일기기, 운영체제를 고려하여 동일한 동작과 스타일을 제공하였습니다.</li>
              <li>Chrome inspect 와 Mac Xcode simulator를 통해 실시간 모바일 화면을 모니터링 하였습니다.</li>
            </ul>
          </li>
        </LegacyInfo>
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
    > ul {
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
    }
  }
`;