import {movies} from "../movieDummy";
import Movie from "./Movie";
import "./MovieList.css"

function MovieList() {
    return (
        <div>
            <div className="app-container">
                {movies.results.map((item) => {
                    return (
                        <Movie title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MovieList;