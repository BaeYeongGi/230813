import React from 'react';
import { ReactComponent as Logo } from "src/assets/images/logo.svg";
import styled from '@emotion/styled';
import Section from "src/components/home/section";
import Title from "src/components/home/title";


const Home = () => {
  return (
    <Container>
      <Section isTop={true} />
      <Title text="프로젝트" />
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

