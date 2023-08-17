import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Section from "src/components/home/section";
import Title from "src/components/home/title";
import projectJSON from 'src/json/home/project.json';
import legacyJSON from 'src/json/home/legacy.json';
import ProjectImg from 'src/components/home/image';
import { jsonDataType } from 'src/types/home';

const Home = () => {
  const [projectData, setProjectData] = useState<jsonDataType[]>([]); // 초기값을 빈 배열로 설정
  const [legacyData, setLegacyData] = useState<jsonDataType[]>([]);
  const [imgContent, setImgContent] = useState('');
  const [isViewImgContent, setIsViewImgContent] = useState(false);
  useEffect(() => {
    setProjectData(projectJSON.data);
  },[])
  useEffect(() => {
    setLegacyData(legacyJSON.data);
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
      <Section content="top" />
      <SectionWrap>
      <Title text="프로젝트" />
      <Section
        content="project"
        projectData={projectData}
        viewProjectImage={setProjectImg}
      />
      {
        isViewImgContent && (
          <ProjectImg
            content={imgContent}
            closeImg={closeProjectImage}  
            projectData={projectData}
          />
        )
      }
      </SectionWrap>
      <SectionWrap>
        <Title text="사용 가능한 기술" />
        <Section 
          content="tech"
        />
        <Title text="레거시 서비스와 함께한 노력들" />
        <Section 
          content="legacy"
          legacyData={legacyData}
        />        
        <Title text="그 외" />
        <Section 
          content="others"
        />  
        <Title text="링크" />
        <Section 
          content="link"
        />  
      </SectionWrap>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  width:1280px;
  margin:0 auto;
  
`;

const SectionWrap = styled.div`
  width:50%;
`;