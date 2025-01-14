import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import MoviesList from "../components/MoviesList"; 
import Searchbar from "../components/Searchbar"; 

function HomePage() {
  const { movie } = useContext(GlobalContext); 

  return (
    <div>
      <Searchbar /> 
      <MoviesList movies={movie} />
    </div>
  );
}

export default HomePage;
