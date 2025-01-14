function MoviesList({ movies, series }) {

    const getFlag = (language) => {
      const Languages = ["ita", "en"];
      return Languages.includes(language) ? `/images/${language}.png`: `/images/placeholder.png`;
    };
  
    return (
      <div>
        <h1>Film</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <h3>{movie.original_title}</h3>
              <p>
                Lingua:{" "}
                <img
                  src={getFlag(movie.original_language)}
                  alt={movie.original_language}
                  style={{ width: "24px", height: "24px" }}
                />
              </p>
              <p>Voto: {movie.vote_average}</p>
            </li>
          ))}
        </ul>
        <h1>Serie TV</h1>
        <ul>
          {series.map((serie) => (
            <li key={serie.id}>
              <h2>{serie.name}</h2>
              <h3>{serie.original_name}</h3>
              <p>
                Lingua:{" "}
                <img
                  src={getFlag(serie.original_language)}
                  alt={serie.original_language}
                  style={{ width: "24px", height: "24px" }}
                />
              </p>
              <p>Voto: {serie.vote_average}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default MoviesList;
  