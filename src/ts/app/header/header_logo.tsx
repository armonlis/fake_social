import React from "react";
import colors from "../../constants/style-colors";

const HeaderLogo = () => {
  return (
    <svg id="header-logo" width="1000" height="200">
      <defs>
        <path id="mainTextPath" d="M 430 80 Q 500 0 570 80" stroke="black"  fill="none"></path>
      </defs>
      <rect width="1000" height="200" fill={colors.header_back}></rect>
    <g>
      <circle cx="500" cy="100" r="50" fill="gold"></circle>
      <path d="M 470 120 A 50 100 0 0 0 530 120" stroke="white" strokeWidth="1" fill="white"></path>
      <path d="M 460 85 Q 480 130 500 85 Q 520 130 540 85" stroke="black" strokeWidth="1" fill="black"></path>
      <animate attributeName="opacity" from="0" to="1" dur="8s" fill="freeze"></animate>
    </g> 
    <path d="M 20 180 H 180 A 15 15 0 0 0 120 130 A 15 20 0 0 0 80 130 A 20 20 0 0 0 12 180" stroke="white" strokeWidth="1" fill="white" transform="translate(400 0)">
      <animateTransform attributeName="transform" type="translate" from="400 0" to="-300 0" dur="7s" fill="freeze"></animateTransform>
    </path>
    <path d="M 30 100 H 270 A 10 10 45 0 0 210 60 A 30 20 0 0 0 130 55 A 10 15 -30 0 0 100 70 A 20 10 0 0 0 30 100" stroke="#DEDCDA" strokeWidth="1" fill="#DEDCDA" transform="translate(400 20)">
      <animateTransform attributeName="transform" type="translate" from="400 20" to="-300 0" dur="10s" fill="freeze"></animateTransform>
    </path>
    <path d="M 700 180 H 950 Q 940 130 900 140 T 850 130 T 800 110 T 750 150 Q 650 120 700 180" stroke="#DEDCDA" strokeWidth="1" fill="#DEDCDA" transform="translate(-300 0)">
      <animateTransform attributeName="transform" type="translate" from="-300 0" to="350 0" dur="10s" fill="freeze"></animateTransform>
    </path>
    <path d="M 700 100 Q 670 50 750 70 Q 770 20 840 70 Q 950 120 830 140 Q 800 170 750 120 Q 720 130 700 100" stroke="white" strokeWidth="1" fill="white" transform="translate(-300 0)">
      <animateTransform attributeName="transform" type="translate" from="-300 0" to="300 -100" fill="freeze" dur="7s"></animateTransform>
    </path>
    <text className="mainText" textLength="160" fill="white" opacity="0"><textPath href="#mainTextPath">HEAVENS</textPath>
      <animate id="mainTextAnim" begin="8s" attributeName="opacity" from="0" to="1" dur="0.75s" repeatCount="3" fill="freeze"></animate>
    </text>
    <text x="100" y="180" className="auxiliaryText" textLength="800" fill="gold" opacity="0">THE BEST PLACE TO FIND NEW FRIENDS AND PARTNERS
      <animate begin="mainTextAnim.end" attributeName="opacity" from="0" to="1" dur="2s" fill="freeze"></animate>
    </text> 
  </svg>
  )
};

export default HeaderLogo;