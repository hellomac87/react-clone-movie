import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { spawn } from 'child_process';

function Movie({title,poster,genres,synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className="Movie__Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres : PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}

function MoviePoster({poster,alt}){
  return(
    <img src={poster} className="Movie__poster" alt={alt} title={alt}/>
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired,
}

function MovieGenre({genre}){
  return(
    <span className="Movie__Genre">{genre} </span>
  )
}

MovieGenre.propTypes = {
  poster: PropTypes.array.isRequired,
}

export default Movie;
