import react from "react";
import styled from "styled-components";

interface Props {
  name: string;
  address: string;
  imgSrc: string;
  menuImage: string;
}

const Store = ({ name, address, imgSrc, menuImage }: Props) => {
  return (
    <article>
      <h2>{name}</h2>
      <h3>{address}</h3>
      <img src={imgSrc} alt={name} />
      <img src={menuImage} alt={name} />
    </article>
  );
};

export default Store;
