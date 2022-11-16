import styled from "styled-components";
import StoreTextingDetail from "./StoreTextingDetail";

const StoreTexting = () => {
  return (
    <StoreTextingContainerCss>
      <StoreTextingDetail
        title="부천 상무초밥"
        address="미야옹"
        menu="미야옹"
      />
      <StoreTextingDetail
        title="의정부 오뎅식당"
        address="미야옹"
        menu="미야옹"
      />
      <StoreTextingDetail title="토끼정" address="미야옹" menu="미야옹" />
      <StoreTextingDetail title="롯데리아(?)" address="미야옹" menu="미야옹" />
    </StoreTextingContainerCss>
  );
};
export default StoreTexting;

const StoreTextingContainerCss = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
`;
