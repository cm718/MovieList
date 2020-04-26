import React, { useState, useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { Form, Input, Button } from '../styles/AddMovie'

const AddMovie = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = e => setName(e.target.value)
  const updatePrice = e => setPrice(e.target.value)

  const addMovie = e => {
    e.preventDefault()
    setMovies(prevMovies => [...prevMovies, { name, price, id: 234 }])
    setName('')
    setPrice('')
  }
  return (
    <Form onSubmit={addMovie}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          placeholder="Movie name"
        />
        <Input
          type="text"
          name="price"
          value={price}
          onChange={updatePrice}
          placeholder="Movie price"
        />
      </div>
      <Button>Submit</Button>
    </Form>
  )
}

export default AddMovie
