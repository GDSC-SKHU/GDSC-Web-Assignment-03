import "../StoreCircle.css";
import styled from "styled-components";

const StoreCircle = () => {
  return <StyledStoreCircle></StyledStoreCircle>;
};

const StyledStoreCircle = styled.div`
  width: 10em;
  height: 10em;
  background-color: black;
  border-radius: 50%;
`;

export default StoreCircle;
