import React, { useContext } from 'react'
import Navbar from '../styles/Nav'
import { MovieContext } from '../context/MovieContext'

const Nav = () => {
  const [movies] = useContext(MovieContext)
  return (
    <Navbar>
      <h3>Movie List</h3>
      <p>Number of Movies: {movies.length}</p>
    </Navbar>
  )
}

export default Nav