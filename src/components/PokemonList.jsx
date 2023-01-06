import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "./Btn";
import { BtnBox } from "./BtnBox";
import { Frame } from "./Frame";

const SPokemonList = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom: 40px;
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
          grid-template-columns: 30vw 1fr;
          padding: 10px 0;
        }
      }
      .img {
        padding: 6px;
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
          border-radius: 4px;
          font-weight: bold;
        }
        .id {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const PokemonList = ({ setIsLoading }) => {
  const [pokemonURLList, setPokemonURLList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const perPage = 100;

  useEffect(() => {
    setIsLoading(true);
    const fetchAllPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`
      );
      const data = await res.json();
      for (let i = 0; i < data.results.length; i++) {
        setPokemonURLList((prev) => [...prev, data.results[i].url]);
      }
    };
    fetchAllPokemon();
    setOffset((prev) => prev + perPage);
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  useEffect(() => {
    const fetchInfo = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return [data.id, data.sprites.other.home.front_default];
    };
    const fetchSpeciesURL = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data.species.url;
    };
    const fetchName = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data.names[0].name;
    };
    pokemonURLList.forEach(async (url) => {
      const [id, image] = await fetchInfo(url);
      const speciesURL = await fetchSpeciesURL(url);
      const name = await fetchName(speciesURL);
      setPokemonList((prev) => [
        ...prev,
        {
          id,
          image,
          name,
        },
      ]);
    });
  }, [pokemonURLList]);

  const viewMore = () => {
    setIsLoading(true);
    const fetchAllPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`
      );
      const data = await res.json();
      let URLArray = [];
      for (let i = 0; i < data.results.length; i++) {
        URLArray.push(data.results[i].url);
      }
      setPokemonURLList(URLArray);
    };
    fetchAllPokemon();
    setOffset((prev) => prev + perPage);
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  return (
    <SPokemonList>
      <Frame>
        <ul className="list">
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <Link to="pokemon" state={{ id: pokemon.id }}>
                <div className="img">
                  <img src={pokemon.image} alt="" />
                </div>
                <div className="text_box">
                  <p className="id">NO.{pokemon.id}</p>
                  <p className="name">{pokemon.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <BtnBox>
          <Btn onClickFunc={viewMore}>さらに{perPage}件表示する</Btn>
        </BtnBox>
      </Frame>
    </SPokemonList>
  );
};
