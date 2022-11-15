import styled from "styled-components";

interface Props {
  name: string;
  address: string;
  linkSrc: string;
}

const Detail = ({ name, address, linkSrc }: Props) => {
  return (
    <div>
      <StyledH2>
        <StyledA href={linkSrc}>{name}</StyledA>
      </StyledH2>
      <StyledP>{address}</StyledP>
    </div>
  );
};

export default Detail;

const StyledA = styled.a`
  text-decoration: none;
  :visited {
    color: black;
  }
  :hover {
    color: red;
    transform: translateY(-10px);
    transition: all 0.3s;
  }
`;

const StyledH2 = styled.h2`
  font-size: 40px;
  margin-left: 3rem;
`;

const StyledP = styled.p`
  font-size: 16px;
  margin-left: 3rem;
`;
