import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    detail: string;
    address: string;
    imgSrc: string;
    // mapScr: string;
}
// 맛집 이름, 주소, 사진, 대표 메뉴 필수

const Store = ({ title, detail, address, imgSrc }: Props) => {
    return (
        <StoreBox>
            <h2>{title}</h2>
            <p>detail:{detail}</p>
            <p>address:{address}</p>
            <StoreImg src={imgSrc} alt={title} />
        </StoreBox>
    );
};

const StoreBox = styled.div`
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    background-color: white;
    padding: 10px;
    width: 300px;
`;
const StoreImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
export default Store;
