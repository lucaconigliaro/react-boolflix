import HomePage from "./pages/HomePage";
import GlobalContext from "./context/GlobalContext";
import { useState } from "react";
import axios from "axios";

// Api
const apiKey = "593bf35a88be3a3e9956bc5dbe656531";
const apiUrl = "https://api.themoviedb.org/3/search";

function App() {
  const [value, setValue] = useState("");
  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([])


  const getMovies = () => {
    axios
      .get(`${apiUrl}/movie`, {
        params: {
          api_key: apiKey,
          query: value,
        },
      })
      .then((resp) => {
        setMovie(resp.data.results);
      });
  };

  const getSeries = () => {
    axios.get(`${apiUrl}/tv`, {
      params: {
        api_key: apiKey,
        query: value,
      },
    })
    .then((resp) => {
      setSeries(resp.data.results)
    });
  };

  const getItems = () => {
    getMovies();
    getSeries();
  };

  const GlobalProviderValue = {
    value,
    setValue,
    getItems,
    movie,
    series
  };

  return (
    <GlobalContext.Provider value={GlobalProviderValue}>
      <HomePage />
    </GlobalContext.Provider>
  );
};
export default App;
