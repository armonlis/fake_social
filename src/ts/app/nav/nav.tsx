import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./style";
import MainBttn from "./main-bttn";
import colors from "../../constants/style-colors";

export const Nav = () => <StyledNav data-testid="nav">
  <Link className="nav-link" to="/"><MainBttn width="60px" color={colors.nav_bttn}/></Link>
</StyledNav>