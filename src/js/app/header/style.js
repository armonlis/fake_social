import styled from "styled-components";
import colors from "../../constants/style-colors";
export default styled.header `
  width: 100%;
  height: 20vh;
  background-color: ${colors.header_back};
  #header-logo {
    margin-left: calc(50vw - 500px);
  }
  .mainText {
    font-size: 40px; 
    font-weight: bold;
  }
  .auxiliaryText {
    font-size: 20px; 
    font-weight: bold;
  }
`;
