import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "./Btn";
import { Frame } from "./Frame";

const SPokemonList = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 10px;
    }
    & > li {
      background-color: #fafafa;
      border-radius: 4px;
      padding: 0 0 15px;
      @media (max-width: 500px) {
        a {
          display: grid;
          grid-template-columns: 110px 1fr;
          padding: 10px 0;
        }
      }
      .text_box {
        text-align: center;
        background-color: #fff;
        width: 90%;
        border-radius: 4px;
        margin-top: 10px;
        margin-inline: auto;
        border: 1px solid #eee;
        padding: 10px 20px;
        @media (max-width: 500px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 0 0 20px;
          margin-top: 0;
          text-align: left;
        }
        .name {
          font-size: 1.2rem;
          margin-top: 2px;
          background-color: #4e4e4e;
          color: #fff;
          border-radius: 4px;
          display: inline-block;
          padding: 2px 24px;
          @media (max-width: 500px) {
            width: fit-content;
          }
        }
        .id {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const PokemonList = ({ setIsLoading }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const perPage = 100;
  const [offset, setOffset] = useState(0);
  const [pokemonSingleList, setPokemonSingleList] = useState([]);

  const fetchPokemonList = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${perPage}`
    );
    const data = await res.json();
    setPokemonList(() => [...data.results]);
    setOffset((prev) => prev + perPage);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const moreFetchPokemon = () => {
    setIsLoading(true);
    fetchPokemonList();
  };

  useEffect(() => {
    const fetchPokemon = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setPokemonSingleList((prev) => [...prev, data]);
    };
    pokemonList.map((pokemon) => {
      fetchPokemon(pokemon.url);
    });
  }, [pokemonList]);

  return (
    <SPokemonList>
      <Frame>
        <ul className="list">
          {pokemonSingleList.map((pokemon) => (
            <li key={pokemon.id}>
              <Link to="pokemon" state={{ id: pokemon.id }}>
                <div className="img">
                  <img src={pokemon.sprites.other.home.front_default} alt="" />
                </div>
                <div className="text_box">
                  <p className="id">NO.{pokemon.id}</p>
                  <p className="name">{pokemon.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Btn onClickFunc={moreFetchPokemon}>さらに{perPage}件表示する</Btn>
      </Frame>
    </SPokemonList>
  );
};
