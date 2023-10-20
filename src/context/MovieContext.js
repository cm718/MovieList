import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: 'Remember the Titans',
      price: '10',
      id: 2134,
    },
    {
      name: 'Braveheart',
      price: '12',
      id: 2135,
    },
    {
      name: 'The Princess Bride',
      price: '15',
      id: 2136,
    },
    {
      name: 'Raiders of the Lost Ark',
      price: '9',
      id: 2137,
    },
    {
      name: 'Ocean\'s Eleven',
      price: '11',
      id: 2138,
    },
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  )
}
