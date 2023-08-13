import styled from '@emotion/styled';
import { projectDataType, sectionType } from 'src/types/home/section';


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
                    <li>
                      <ImgButton onClick={() => viewProjectImage?.(`${contents.img}1`)}>이미지1</ImgButton>
                      <ImgButton onClick={() => viewProjectImage?.(`${contents.img}2`)}>이미지2</ImgButton>
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
    </>
  );
};

export default Section;

const TopSection = styled.section`
  text-align:center;
  margin:0 0 30px 0;
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
  }
`;

const ImgButton = styled.button`

`;