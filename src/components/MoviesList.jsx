function MoviesList({ movies, series }) {
    return (
      <div>
        <h1>Film</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <h3>{movie.original_title}</h3>
              <p>Lingua: {movie.original_language}</p>
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
              <p>Lingua: {serie.original_language}</p>
              <p>Voto: {serie.vote_average}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default MoviesList;
  