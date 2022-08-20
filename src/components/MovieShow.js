import React from "react";
import { useParams } from "react-router-dom";

function MovieShow( {movies} ) {
const params = useParams();
return (
    <div>
        <h1>movie Show </h1>
    <h3>{movies[params.movieId].title}</h3>
    </div>
    );
}

export default MovieShow;