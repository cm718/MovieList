import React from 'react'
import styled from 'styled-components'
import Card from '../styles/Card'

const Text = styled.h3`
  font-size: 1.2rem;
  padding: 20px;
`

const Movie = ({ movie }) => {
  return (
    <Card>
      <Text>{movie.name}</Text>
      <Text>${movie.price}</Text>
    </Card>
  )
}

export default Movie
