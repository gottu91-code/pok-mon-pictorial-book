import "./css/reset.css";
import "./css/base.css";
import { Header } from "./components/Header";
import { PokemonList } from "./components/PokemonList";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonSingle } from "./components/PokemonSingle";
import { Info } from "./components/Info";
import { PageTop } from "./components/PageTop";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="info" element={<Info />}></Route>
            <Route path="/" element={<PageTop setIsLoading={setIsLoading} />} />
            <Route path="pokemon" element={<PokemonSingle />} />
          </Routes>
        </Main>
        <Footer />
        {isLoading && <Loading />}
      </BrowserRouter>
    </>
  );
};
