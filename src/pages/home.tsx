import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Section from "src/components/home/section";
import Title from "src/components/home/title";
import homeJSON from 'src/json/home.json';
import ProjectImg from 'src/components/home/image';
import { secionDataType } from 'src/types/home';
import { breakPoints } from 'src/utils/useBreakPoints';

const Home = () => {
  const [homeData, setHomeData] = useState<secionDataType>();  
  const [imgContent, setImgContent] = useState('');
  const [isViewImgContent, setIsViewImgContent] = useState(false);

  useEffect(() => {
    setHomeData(homeJSON.data)
  },[])

  const setProjectImg = (params:string) => {
    setImgContent(params)
    setIsViewImgContent(true);
  }

  const closeProjectImage = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const target = e.target as HTMLImageElement;
    const ctarget = e.currentTarget as HTMLImageElement;
    if(target === ctarget){
      setIsViewImgContent(false);
    }
  }

  return (
    <Container>
      <TopSection>
        <h1 className="big_title">🧑‍💻배영기 이력서</h1>
        <p className="summary">
          서울에서 근무하는 소프트웨어 엔지니어 입니다. 사용자의 입장에서 사용하기 좋은 페이지를 고민하고 구현합니다.<br/>
          더 나아가 데이터를 시각화 하고 비즈니스 로직을 처리하는 프론트엔드 개발도 함께 익히겠습니다. 
        </p>
      </TopSection>
      <Title text="프로젝트" />
        <Section
          content="project"
          data={homeData}
          viewProjectImage={setProjectImg}
        />
      {
        isViewImgContent && (
          <ProjectImg
            content={imgContent}
            closeImg={closeProjectImage}  
            data={homeData}
          />
        )
      }
      <Title text="사용 가능한 기술" />
      <Section 
        content="tech"
        data={homeData}
      />
      <Title text="레거시 서비스와 함께한 노력들" />
      <Section 
        content="legacy"
        data={homeData}
      />        
      <Title text="그 외" />
      <Section 
        content="others"
        data={homeData}
      />  
      <Title text="링크" />
      <Section 
        content="link"
      />  
    </Container>
  );
};

export default Home;

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

const Container = styled.section`
  width:980px;
  margin:0 auto;
  box-sizing:border-box;
  ${breakPoints.labtop} {
    width:100%;
    padding:0 20px;
  }


`;


