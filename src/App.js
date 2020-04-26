import React from 'react'
import './styles/z.css'
import MovieList from './components/MovieList'
import Nav from './components/Nav'
import { MovieProvider } from './context/MovieContext'

function App() {
  return (
    <MovieProvider>
      <Nav />
      <MovieList />
    </MovieProvider>
  )
}

export default App
