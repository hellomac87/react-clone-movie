import React, {Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render(){
    return(
      <div className="">
        <MoviePoster />
        <h1>hello this is a movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component{
  render(){
    return(
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJQt4RT47Io_tT0ukKfub1f8SxOSX-rH20Sa5f9dQ3trUp4U2" alt=""/>
    )
  }
}

export default Movie;
