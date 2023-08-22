import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface textType {
  text: string
}

const Title = ({ text }: textType) => {

  const theme = useTheme();

  return (
    <NormalTitle theme={theme}>
      {text}
    </NormalTitle>
  );
};

export default Title;

const NormalTitle = styled.h2`
    font-size: 3rem;
    padding-left: 16px;
    position: relative;
    margin: 50px 0 30px 0;
    color:${props => props.theme.fontColor};
    &::before {
      content:'';
      display:block;
      width:6px;
      height:6px;
      border-radius:6px;
      border:2px solid #4072ff;
      position:absolute;
      top:0;
      left:0;
    }
`