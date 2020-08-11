import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://i.redd.it/kbg0dmup4of51.jpg";



const Movie = ({ movie }) => {
    const poster = 
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
          <a style={{color: '#66FCF1',textDecoration: 'none'}} target='_blank' href={`https://www.imdb.com/title/${movie.imdbID}/`}>
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie title: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>{movie.Year}</p>
          </a>
        </div>
    );
};

export default Movie;