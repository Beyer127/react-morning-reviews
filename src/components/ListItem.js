import React from 'react'

const listItem = ({movie}) => {


    return <div className="List-Item">
        <img alt={movie.title} className="movie-poster" src={movie.posterImg}/>
        <div className="movie-info">
            <p>{movie.title}</p>
            <p>{movie.year}</p>
        </div>
    </div>
}

export default listItem