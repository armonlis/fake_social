import React from "react";

export const enum Sizes { small = "100", medium = "200", large = "300" };

interface IProps {
  size?: Sizes;
};

const Loader = (props: IProps) => {
  const { size = Sizes.small } = props;
  const loaderTextStyle = `{font-weight: bold; font-size: 40px}`;
  const loderStyle = `{margin: 30% auto}`;
  return (
    <svg id="loader" width={size} height={size} viewBox="0 0 300 300">
    <style>
      .loaderMaskText {loaderTextStyle}
    </style>
    <defs>
      <mask id="loaderMask">
        <path d="M 100 100 Q 0 190 100 280 Q 150 270 200 280 Q 330 150 80 30 l -20 20 C 110 60 100 100 100 100 L 95 105" stroke="blue" strokeWidth="10" fill="white"></path>
        <text className="loaderMaskText" y="200"  x="70" textLength="160" fill="black">WAIT...</text>  
      </mask>
    </defs>
    <g mask="url(#loaderMask)">
      <rect x="0" y="0" width="300" height="300" fill="white"></rect>
      <path d="M 0 0 v 400 h 450 v -360 C 400 -20 330 0 300 30 C 250 70 200 0 150 0 C 110 0 40 60 0 0" fill="blue">
        <animateTransform attributeName="transform" type="translate" values="0, 300; -100, 200; 0, 100; -100, 0"  dur="7s" repeatCount="indefinite"></animateTransform>
      </path>
    </g>
  </svg>
  )    
};

export default Loader;
