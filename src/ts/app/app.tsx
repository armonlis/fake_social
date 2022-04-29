import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledApp from "./style";
import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import { Main } from "./main/main";
import { Footer } from "./footer/footer";

const App =
  <BrowserRouter>
    <StyledApp>
      <Header />
      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      <Footer />
    </StyledApp>;
  </BrowserRouter>
export default App;
