import React from "react";

type Props = {
  width?: string,
  height?: string,
  color?: string,
  hoverColor?: string
};

const MainBttn = (props: Props) => {
  const { width, height, color = "lightgray", hoverColor = "white" } = props;
  return (
    <svg id="resetButton" height={height ?? width ?? "200px"} width={width ?? height ?? "200px"}  viewBox="0 0 200 200">
      <rect width="200" height="200" rx="30" stroke={color} strokeWidth="10" fill="transparent">
        <animate attributeName="stroke" begin="resetButtonGlass.mouseenter" end="resetButtonGlass.mouseleave" values={hoverColor} ></animate>
      </rect>
      <rect x="10" y="10" width="180" height="180" rx="30" stroke={color} strokeWidth="5" fill="transparent">
        <animate attributeName="stroke" begin="resetButtonGlass.mouseenter" end="resetButtonGlass.mouseleave" values={hoverColor} ></animate>
      </rect>
      <path id="mainBttnArrow" d="M 100 30 Q 170 30 170 100 h 10 l -15 20 l -15 -20 h 10 Q 160 40 100 40" fill={color}>
        <animate attributeName="fill" begin="resetButtonGlass.mouseenter" end="resetButtonGlass.mouseleave" values={hoverColor}></animate>
        <animateTransform attributeName="transform" type="rotate" begin="resetButtonGlass.mouseenter" end="resetButtonGlass.mouseleave" from="0 100 100" to="360 100 100" repeatCount="indefinite"  dur="1s"></animateTransform>  
      </path>
      <use href="#mainBttnArrow" transform="rotate(180 100 100)"></use>
      <rect id="resetButtonGlass" width="200" height="200" stroke="none" fill="transparent"></rect>
    </svg>
  );
};

export default MainBttn;