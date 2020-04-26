import React, { useContext } from 'react'
import Movie from './Movie'
import AddMovie from './AddMovie'
import { MovieContext } from '../context/MovieContext'

const MovieList = () => {
  const [movies] = useContext(MovieContext)
  return (
    <div>
      <AddMovie />
      {movies.map(movie => (
        <Movie movie={movie} key={movie.id}/>
      ))}
    </div>
  )
}

export default MovieList
