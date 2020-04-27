import React from 'react'
import MovieList from './components/MovieList'
import Nav from './components/Nav'
import { MovieProvider } from './context/MovieContext'
import './styles/z.css'

function App() {
  return (
    <MovieProvider>
      <Nav />
      <MovieList />
    </MovieProvider>
  )
}

export default App
