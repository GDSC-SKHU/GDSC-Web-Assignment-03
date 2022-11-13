import React from 'react';
import styled from 'styled-components';
import Store from './components/Store';

function App() {
    return (
        <>
            <Title>김재관 맛집 리스트</Title>
            <BackgroundDiv>
                <Store
                    title="헤키"
                    detail="망원동 돈까스 맛집,웨이팅 최소 30분, 기다릴만함"
                    address="서울특별시 마포구 망원동"
                    imgSrc="haekki.jpeg"
                    mapScr="https://goo.gl/maps/Dcud2rDbypYeTzse8"
                />
            </BackgroundDiv>
        </>
    );
}

const BackgroundDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    align-items: center;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    margin: 3.25rem 4rem;
`;

export default App;
