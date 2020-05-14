import React from 'react'
import { MovieProvider } from '../context/MovieContext'
import '../styles/z.css'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import Nav from './Nav'

function App() {
  return (
    <MovieProvider>
      <Nav />
      <AddMovie />
      <MovieList />
    </MovieProvider>
  )
}

export default App
