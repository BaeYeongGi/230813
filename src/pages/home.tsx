import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Section from "src/components/home/section";
import Title from "src/components/home/title";
import projectJSON from 'src/json/home/project.json';
import ProjectImg from 'src/components/home/image';
import { projectDataType } from 'src/types/home/section';

const Home = () => {
  const [projectData, setProjectData] = useState<projectDataType[]>([]); // 초기값을 빈 배열로 설정
  const [imgContent, setImgContent] = useState('');
  useEffect(() => {
    setProjectData(projectJSON.data)
  },[])

  const setProjectImg = (params:string) => {
    setImgContent(params)
  }

  return (
    <Container>
      <Section content="top" />
      <Title text="프로젝트" />
      <Section
        content="project"
        data={projectData}
        viewProjectImage={setProjectImg}
      />
      <ProjectImg content={imgContent}/>
      <Title text="기술" />
      <Title text="레거시 서비스와 함께한 노력들" />
      <Title text="그 외" />
      <Title text="링크" />
    </Container>

  );
};

export default Home;

const Container = styled.section`
  width:1280px;
  margin:0 auto;
  
`;

