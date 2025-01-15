function MoviesList({ movies, series }) {
  const posterUrl = "https://image.tmdb.org/t/p/w342";

  const getFlag = (language) => {
    const languages = ["it", "en"];
    return languages.includes(language) ? `/images/${language}.png` : `/images/placeholder.png`;
  };

  const getStars = (vote) => {
    const stars = Math.ceil(vote / 2);
    let starIcons = [];

    for (let i = 0; i < stars; i++) {
      starIcons.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    for (let i = stars; i < 5; i++) {
      starIcons.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return starIcons;
  };

  return (
    <div className="container">
      <section className="movies-section">
        <h1>Film</h1>
        <ul className="movies-container">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-card">
              <img
                src={`${posterUrl}${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <h3 className="movie-original-title">{movie.original_title}</h3>
                <p>
                  Lingua:{" "}
                  <img
                    src={getFlag(movie.original_language)}
                    alt={movie.original_language}
                    className="language-flag"
                  />
                </p>
                <p className="movie-vote">Voto: {getStars(movie.vote_average)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="series-section">
        <h1>Serie Tv</h1>
        <ul className="series-container">
          {series.map((serie) => (
            <li key={serie.id} className="series-card">
              <img
                src={`${posterUrl}${serie.poster_path}`}
                alt={serie.name}
                className="series-image"
              />
              <div className="series-info">
                <h2 className="series-title">{serie.name}</h2>
                <h3 className="series-original-name">{serie.original_name}</h3>
                <p>
                  Lingua:{" "}
                  <img
                    src={getFlag(serie.original_language)}
                    alt={serie.original_language}
                    className="language-flag"
                  />
                </p>
                <p className="series-vote">Voto: {getStars(serie.vote_average)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MoviesList;
