import React from 'react';
import styled from '@emotion/styled';

interface sectionType {
  isTop: boolean;
}

const Section = ({ isTop }: sectionType) => {
  return (
    isTop ? ( 
    <TopSection>
      <h1 className="big_title">💻 프론트엔드 개발을 잘하고 싶은 퍼블리셔 배영기 입니다.</h1>
      <p className="summary">
        서울에서 근무하는 4년차 퍼블리셔 입니다. 사용자의 입장에서 사용하기 좋은 페이지를 고민하고 구현합니다.<br/>
        더 나아가 데이터를 시각화 하고 비즈니스 로직을 처리하는 프론트엔드 개발자가 되기 위해 노력하겠습니다. 
      </p>
    </TopSection>
    ) : null
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