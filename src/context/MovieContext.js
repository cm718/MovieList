import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: 'Remember the Titans',
      price: '10',
      id: 2134,
    },
    {
      name: 'Die Hard',
      price: '12',
      id: 2135,
    },
    {
      name: 'The Princess Bride',
      price: '15',
      id: 2136,
    },
    {
      name: 'Rescuers Down Under',
      price: '9',
      id: 21556,
    }
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  )
}
