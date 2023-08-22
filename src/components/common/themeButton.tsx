import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as IconLight  } from 'src/assets/images/icon_light.svg';
import { ReactComponent as IconDark  } from 'src/assets/images/icon_dark.svg';

type ThemeType = {
  toggleDark:VoidFunction;
  isDark:boolean;
}

const ThemeButton = ({toggleDark, isDark}: ThemeType) => {
  return (
    <Button
    className={isDark ? 'active' : ''}
    aria-label={isDark ? '라이트모드 버튼' : '다크모드 버튼'}
    onClick={toggleDark}>
      <span className="bullet"></span>
      <IconLight className="light" />
      <IconDark className="dark" />
    </Button> 
  );
};

export default ThemeButton;

const Button = styled.button`
  width:80px;
  height:44px;
  border-radius:44px;
  color:blue;
  position:fixed;
  bottom:20px;
  right:20px;
  border:0;
  background-color:#eee;
  box-shadow:
  inset 0px 5px 15px rgba(0,0,0,0.4),
  inset 0px -5px 15px rgba(255,255,255,0.4);
  cursor:pointer;
  svg {
    stroke: #222;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    &.light {
      right:10px;
    }
    &.dark {
      left:10px;
    }
  }
  .bullet {
    display:block;
    width:30px;
    height:30px;
    border-radius:30px;
    box-shadow:1px 1px 3px 1px #333;
    position:absolute;
    z-index:1;
    background-color:#fff;
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