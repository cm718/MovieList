import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { Button, Form, Input } from '../styles/AddMovie'

const AddMovie = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [, setMovies] = useContext(MovieContext)

  const updateName = e => setName(e.target.value)
  const updatePrice = e => setPrice(e.target.value)

  const addMovie = e => {
    e.preventDefault()
    setMovies(movies => [...movies, { name, price, id: Math.random() }])
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
        placeholder="Enter Movie Name"
      />
      <Input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
        placeholder="Enter Movie Price"
      />
      <Button>Submit</Button>
    </Form>
  )
}

export default AddMovie
