import React from "react";
import StyledMain from "./style";
import Loader from "../loader/loader";
import { Sizes } from "../loader/loader";

export const Main = () => <StyledMain data-testid="main"> 
  <Loader size={Sizes.large}/>
</StyledMain>;