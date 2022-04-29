import styled from "styled-components";
import colors from "../../constants/style-colors";
export default styled.nav `
  width: 100%;
  min-width: 1000px;
  height: 10vh;
  background-color: ${colors.header_back};
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  .nav-link {
    margin: 0 10px;
  }
`;
