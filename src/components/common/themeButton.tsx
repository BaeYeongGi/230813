import React, { useState } from 'react';
import styled from '@emotion/styled';

type ThemeType = {
  toggleDark:VoidFunction;
  isDark:boolean;
}

const ThemeButton = ({toggleDark, isDark}: ThemeType) => {
  return (
    <Button
    className={isDark ? 'active' : ''}
    onClick={toggleDark}>
      <span className="bullet"></span>
    </Button>
  );
};

export default ThemeButton;

const Button = styled.button`
  width:80px;
  height:50px;
  border-radius:50px;
  color:blue;
  position:fixed;
  bottom:20px;
  right:20px;
  border:0;
  background-color:#eee;
  box-shadow:0 0 6px rgba(0, 0, 0, 0.4);
  cursor:pointer;
  .bullet {
    display:block;
    width:30px;
    height:30px;
    border-radius:30px;
    border:1px solid #000;
    position:absolute;
    top:50%;
    transition-property:left;
    transition-duration:0.4s;
    transform:translateY(-50%);
    left:8px;
  }
  &.active {
    .bullet {
      left:40px;
    }
  }

`;