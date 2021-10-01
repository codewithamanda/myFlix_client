import React from 'react';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick  } = this.props;

        return (
            <div className="movie-view">
              <div className="movie-poster">
                <img src={movie.ImagePath} />
              </div>  
              <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.Title}</span>
              </div>
              <div className="movie-genre">
                  <span className="label">Genre: </span>
                  <span className="value">{movie.genre}</span>
              </div>
              <div className="movie-rating">
                  <span className="label">Rating: </span>
                  <span className="value">{movie.Rating}</span>
              </div>
              <div className="movie-director">
                  <span className="label">Director: </span>
                  <span className="value">{movie.Director}</span>
              </div>
              <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Description}</span>
              </div>
              <button onClick={() => { onBackClick(null); }}>Back</button>
            </div>  
        );
    }
}