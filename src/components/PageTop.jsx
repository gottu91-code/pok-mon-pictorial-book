import { InfoBtn } from "./InfoBtn";
import { PokemonList } from "./PokemonList";

export const PageTop = ({ setIsLoading }) => {
  return (
    <>
      <InfoBtn />
      <PokemonList setIsLoading={setIsLoading} />
    </>
  );
};
