import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./style";
import MainBttn from "./resetBttn";
export const Nav = () => <StyledNav data-testid="nav">
  <Link className="nav-link" to="/"><MainBttn width="60px"/></Link>
  
</StyledNav>;
