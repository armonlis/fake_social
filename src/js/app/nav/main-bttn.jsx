import React from "react";
;
const MainBttn = (props) => {
    var _a, _b;
    const { width, height, color = "gray", hoverColor = "white" } = props;
    return (<svg height={(_a = height !== null && height !== void 0 ? height : width) !== null && _a !== void 0 ? _a : "200px"} width={(_b = width !== null && width !== void 0 ? width : height) !== null && _b !== void 0 ? _b : "200px"} viewBox="0 0 200 200">
    <rect width="200" height="200" rx="30" stroke={color} strokeWidth="10" fill="transparent"></rect>
    <rect x="10" y="10" width="180" height="180" rx="30" stroke={color} strokeWidth="5" fill="transparent"></rect>
    <g>
      <path id="main-bttn-arrow" d="M 100 30 Q 170 30 170 100 h 10 l -15 20 l -15 -20 h 10 Q 160 40 100 40" fill={color}></path>
      <use href="#main-bttn-arrow" transform="rotate(180 100 100)"></use>
    </g>
  </svg>);
};
export default MainBttn;
