import "./css/reset.css";
import "./css/base.css";
import { Header } from "./components/Header";
import { PokemonList } from "./components/PokemonList";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";
import { useState } from "react";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <Main>
        <PokemonList setIsLoading={setIsLoading} />
      </Main>
      <Footer />
      {isLoading && <Loading />}
    </>
  );
};
