import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://i.redd.it/kbg0dmup4of51.jpg";



const Movie = ({ movie }) => {
    const poster = 
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
            <a target='_blank' href={`https://www.imdb.com/title/${movie.imdbID}/`}>
                <img
                    width="200"
                    alt={`The movie title: ${movie.Title}`}
                    src={poster}
                />
                </a>
            </div>
            <p>{movie.Year}</p>
        </div>
    );
};

export default Movie;