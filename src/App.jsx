import "./App.css";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
}

export default App;
