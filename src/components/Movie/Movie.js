import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../redux/actions/index';

import './Movie.css';

class Movie extends React.Component {

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
            </div>
        );
    }
}



export default (Movie);