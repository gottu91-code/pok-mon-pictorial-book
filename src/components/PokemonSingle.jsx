import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Frame } from "./Frame";

const SPokemonSingle = styled.div``;
const SPokemonSingleContainer = styled.div`
  width: 80%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  column-gap: 40px;
  align-items: center;
  .text_box {
    background-color: #fafafa;
    border-radius: 8px;
    padding: 40px 32px;
    & > * + * {
      margin-top: 10px;
    }
    .text {
      &._name {
        font-weight: bold;
        font-size: 1.4rem;
      }
    }
  }
`;

export const PokemonSingle = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonSingleInfo, setPokemonSingleInfo] = useState({
    id: "",
    name: "",
    type: "",
    text: "",
  });
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemonInfo(data);
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const data = await res.json();
      setPokemonSingleInfo({
        id: data.id,
        name: data.names[0].name,
        type: data.genera[0].genus,
        text: data.flavor_text_entries
          .filter((flavor_text_obj) => flavor_text_obj.language.name === "ja")
          .pop().flavor_text,
      });
    };
    fetchPokemon();
  }, [pokemonInfo]);

  return (
    <SPokemonSingle>
      <Frame>
        <SPokemonSingleContainer>
          <div className="img">
            <img
              src={pokemonInfo && pokemonInfo.sprites.other.home.front_default}
              alt=""
            />
          </div>
          <div className="text_box">
            <p className="id">NO.{pokemonSingleInfo.id}</p>
            <p className="text _name">{pokemonSingleInfo.name}</p>
            <p className="text _type">{pokemonSingleInfo.type}</p>
            <p className="text">
              {pokemonSingleInfo.text.replaceAll("　", "").replaceAll("\n", "")}
            </p>
          </div>
        </SPokemonSingleContainer>
      </Frame>
    </SPokemonSingle>
  );
};
