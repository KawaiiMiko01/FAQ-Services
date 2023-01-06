import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Listgroup from "./components/Listgroup";
import Text1 from "./components/Text1";

function App() {
  return (
    <>
      <Header />
      <Text1 />
      <Cards />
      <Listgroup />
    </>
  );
}

export default App;
