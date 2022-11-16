import React from 'react';
import Store from './components/Store';
import GlobalStyle from './GlobalStyle';
import { Fragment } from 'react';
import Store1Img from './Store1.jpg';
function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <h1>나만의 맛집 소개</h1>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
      <h1>재관님의 맛집 소개</h1>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      ></Store>
    </Fragment>
  );
}

export default App;
