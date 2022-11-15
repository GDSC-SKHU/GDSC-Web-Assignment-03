import React from "react";
import styled from "styled-components";
import Store from "./components/Store";
import GlobalStyle from "./GlobalStyle";
// import Menu from "./Menu";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Store
        name="불간 짬뽕"
        address="인천 서구 청라라임로 40"
        imgSrc="bbong.jpg"
        menuImage="bull.jpg"
      />
      <Store
        name="돈워리"
        address="인천 서구 승학로 470"
        imgSrc="dontworry.jpg"
        menuImage="losgas.jpg"
      />
    </div>
  );
}

export default App;
