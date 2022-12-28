import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Frame } from "./Frame";

const SPokemonSingle = styled.div``;

export const PokemonSingle = () => {
  const location = useLocation();
  const { id } = location.state;

  return (
    <SPokemonSingle>
      <Frame>{id}</Frame>
    </SPokemonSingle>
  );
};
