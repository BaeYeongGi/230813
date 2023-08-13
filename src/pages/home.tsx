import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Section from "src/components/home/section";
import Title from "src/components/home/title";
import projectJSON from 'src/json/home/project.json';
import { contentsType } from 'src/types/home/section';

const Home = () => {
  const [projectData, setProjectData] = useState<contentsType[]>([]); // 초기값을 빈 배열로 설정
  useEffect(() => {
    setProjectData(projectJSON.data)
  },[])

  return (
    <Container>
      <Section content="top" />
      <Title text="프로젝트" />
      <Section content="project" data={projectData} />
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

