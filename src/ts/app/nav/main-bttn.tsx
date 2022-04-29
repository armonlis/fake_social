import React from "react";

interface IProps {
  width?: string,
  height?: string,
  color?: string,
  hoverColor?: string
};

const MainBttn = (props: IProps) => {
  const { width, height, color = "gray", hoverColor = "white" } = props;
  return (
    <svg height={height ?? width ?? "200px"} width={width ?? height ?? "200px"}  viewBox="0 0 200 200">
    <rect width="200" height="200" rx="30" stroke={color} strokeWidth="10" fill="transparent"></rect>
    <rect x="10" y="10" width="180" height="180" rx="30" stroke={color} strokeWidth="5" fill="transparent"></rect>
    <g>
      <path id="main-bttn-arrow" d="M 100 30 Q 170 30 170 100 h 10 l -15 20 l -15 -20 h 10 Q 160 40 100 40" fill={color}></path>
      <use href="#main-bttn-arrow" transform="rotate(180 100 100)"></use>
    </g>
  </svg>
  );
};

export default MainBttn;