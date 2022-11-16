import styled from "styled-components";
import StoreTextingDetail from "./StoreTextingDetail";

const StoreTexting = () => {
  return (
    <StoreTextingContainerCss>
      <StoreTextingDetail />
      <StoreTextingDetail />
      <StoreTextingDetail />
      <StoreTextingDetail />
    </StoreTextingContainerCss>
  );
};
export default StoreTexting;

const StoreTextingContainerCss = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
`;
