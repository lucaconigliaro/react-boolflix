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
    <div>
      <div>
        <h1>Film</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`${posterUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "150px", height: "auto" }}
              />
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
              <p>Voto: {getStars(movie.vote_average)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Serie TV</h1>
        <ul>
          {series.map((serie) => (
            <li key={serie.id}>
              <img
                src={`${posterUrl}${serie.poster_path}`}
                alt={serie.name}
                style={{ width: "150px", height: "auto" }}
              />
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
              <p>Voto: {getStars(serie.vote_average)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MoviesList;
