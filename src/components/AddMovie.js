import React, { useState, useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { Form, Input, Button } from '../styles/AddMovie'

const AddMovie = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = e => setName(e.target.value)
  const updatePrice = e => setPrice(e.target.value)

  const addMovie = e => {
    e.preventDefault()
    setMovies(movies => [...movies, { name, price, id: 234 }])
    setName('')
    setPrice('')
    document.getElementsByTagName('input')[0].focus()
  }
  return (
    <Form onSubmit={addMovie}>
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
      <Button>Submit</Button>
    </Form>
  )
}

export default AddMovie
