import StoreCircle from "./StoreCircle";

import styled from "styled-components";
const Store = () => {
  return (
    <StoreCss className="Store">
      <StoreCircle />
      <StoreCircle />
      <StoreCircle />
      <StoreCircle />
    </StoreCss>
  );
};
export default Store;

const StoreCss = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2em;
`;
