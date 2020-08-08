import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://i.redd.it/kbg0dmup4of51.jpg";

const Movie = ({ movie }) => {
    const poster = 
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie title: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
};

export default Movie;