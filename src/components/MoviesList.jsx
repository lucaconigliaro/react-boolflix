function MoviesList ({ movies }) {
    
    return (
      <>
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
      </>
    );
  }
  
  export default MoviesList;
  