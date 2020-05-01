import React from 'react'
import { Card, Text } from '../styles/Movie'

const Movie = ({ movie }) => {
  return (
    <Card>
      <Text>{movie.name}</Text>
      <Text>${movie.price}</Text>
    </Card>
  )
}

export default Movie
