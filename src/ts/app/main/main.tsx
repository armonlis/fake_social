import React, { useEffect, useState } from "react";
import StyledMain from "./style";
import Loader from "../loader/loader";
import { Sizes } from "../loader/loader";
import { SERVER, SERVER_INTERVAL } from "../../constants/constants";

export const Main = () => {
const [data, setData] = useState(null);
useEffect(() => {
  const intervalID = setInterval(() => {
    fetch(SERVER).then(response => response.json()).then(data => {
        setData(data);
        clearInterval(intervalID);
      });
    }, SERVER_INTERVAL);
  return () => clearInterval(intervalID);
});

return <StyledMain data-testid="main">
  { data ? <h1>Something data!!!!</h1> : <Loader size={Sizes.large}/> } 
</StyledMain>
};