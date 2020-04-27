import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import AddMovie from './AddMovie'
import Movie from './Movie'

const MovieList = () => {
  const [movies] = useContext(MovieContext)
  return (
    <div>
      <AddMovie />
      {movies.map(movie => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default MovieList
