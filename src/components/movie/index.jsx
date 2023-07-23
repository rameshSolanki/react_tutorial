import movies from "../data/movie.json";
import MovieProps from "../MovieProps";

const movieList = movies.map((movie) => (
        <MovieProps
            Title={movie.Title}
            Poster={movie.Poster}
            Year={movie.Year}
            Runtime={movie.Runtime}
        />
));

const Movie = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {movieList}
    </div>
  );
};

export default Movie;
