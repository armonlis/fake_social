import React from "react";
import StyledApp from "./style";
import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import { Main } from "./main/main";
import { Footer } from "./footer/footer";
const App = <StyledApp>
    <Header />
    <Nav />
    <Main />
    <Footer />
  </StyledApp>;
export default App;
