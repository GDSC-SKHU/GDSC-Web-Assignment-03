import styled from "styled-components";

interface Props {
  title: string;
  summary: string;
  imgSrc: string;
  grade: string;
  grade2: string;
}

const Restaurant = ({ title, summary, imgSrc, grade, grade2 }: Props) => {
  return (
    <StyleSection>
    <StyledArticle>
      <StyledH2>{title}</StyledH2>
      <Summary>{summary}</Summary>
      <StyledImg src={imgSrc} alt={title} />
      <StyledP>{grade}</StyledP>
      <StyledP>{grade2}</StyledP>
    </StyledArticle>
      <StyledArticle>
      <StyledH3>- 대표 메뉴 -</StyledH3>
      </StyledArticle>
    </StyleSection>
  );
};

const StyleSection = styled.section`
  display: flex;
  background-color: #ffebcf;
  height: 80%;
  display: flex;
  justify-content: space-around;
`
const StyledArticle = styled.article`
  width: 500px;
  padding: 20px;
  margin: 30px 50px;
  text-align: center;

  border-radius: 25px;
  border: 3px solid lightgray;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  font-family: serif;
  margin: 20px
`;

const StyledH3 = styled.h3`
  font-size: 30px;
  font-family: serif;
  margin: 20px;
`;

const Summary = styled.p`
  color: black;
  margin: 5px;
  font-family: serif;
  font-size: 25px;
`;

const StyledImg = styled.img`
    width:300px;
    height: 350px;
    margin: auto;
    border-radius: 30px;
`;
const StyledP = styled.p`
  margin: 10px;
`

const StyledDiv = styled.div`
  height: auto;
`

export default Restaurant;
