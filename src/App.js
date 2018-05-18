import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render : componentWillMount() => render() => componentDidMount()
  // Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()

  state = {
    
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
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
          {
            title: "Dead Pool",
            poster:"https://assets.voxcinemas.com/posters/P_HO00005265.jpg"
          },
        ]
      });
    },5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    });
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
