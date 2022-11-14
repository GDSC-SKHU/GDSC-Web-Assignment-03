import "./index.css";
import Nav from "./components/Nav";
import Restaurant from "./components/Restaurant";
import styled from "styled-components";
import { useState } from "react";

//import하면 어떤 일이 일어날까? -> 번들링? 스타일 로더..?

function App() {
  //app 함수 호출 함수 컴포넌트?

  const [number, setNumber] = useState(0);

  return (
    <div>
      <Nav setter={setNumber} />
      {number === 0 && (
        <Restaurant
          title="담소소사골순대육개장 "
          summary="사당점"
          imgSrc="damso.jpeg"
          grade="네이버 지도 평점: 4.28"
          grade2="카카오 지도 평점: 3.8"
        />
      )}
      {number === 1 && (
        <Restaurant title="Once" summary="로멘스" imgSrc="movie2.jpeg" grade="" grade2=""/>
      )}
    </div>
  );
}

// const StyledDiv = styled.div` //이렇게 밖에 선언하는 이유는 App이라는 컴포넌트가 많이 호출될 수 있기 때문에
//   background-color: green;
//   padding: 20px;
//   margin: 20px;
//   `;

//css인 js..? css 안에 js 변수를 넣을 수 있다.

export default App;

//! 반복되고 조금씩 다른 애들을 위해서 컴포넌트 라는게 있음
