import React, {Component} from 'react'
import movies from '../data/movies.json'
import ListItem from './ListItem'
import Form from './Form'

class List extends Component{
    constructor(){
        super()
        this.state = {
            movies: movies
        }
    }

    render(){
        const moviesMap = this.state.movies.map(movie => {
            return <ListItem key={movie.id} movie={movie} />
        })
            return <div className="list">{moviesMap}
                <Form/>
                {moviesMap}
            </div>
    }
}

export default List