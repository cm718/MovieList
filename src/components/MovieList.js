import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import Movie from './Movie'

const MovieList = () => {
  const [movies] = useContext(MovieContext)
  const list = movies.map(movie => <Movie movie={movie} key={movie.id} />)
  return <div>{list}</div>
}

export default MovieList
