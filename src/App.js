import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:"Matrix",
    poster:"https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    title:"Full Metal Jacket",
    poster:"https://resizing.flixster.com/xqFW8SryVoj3g4hezXKsNJr9P9o=/206x305/v1.bTsxMTE2ODAyOTtqOzE3NzY5OzEyMDA7ODAwOzEyMDA",
  },
  {
    title:"Oldboy",
    poster:"https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg",
  },
  {
    title:"Star Wars",
    poster:"https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
  },
]

class App extends Component {

  // Render : componentWillMount() => render() => componentDidMount()
  // Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()

  componentWillMount(){
    console.log('Render 1) willMount')
  }

  componentDidMount(){
    console.log('Render 2) didMount')
  }

  render() {
    console.log('Render 3) did render');
    return (
      <div className="App">
        {movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
