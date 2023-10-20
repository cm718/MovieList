import React, { useContext, useRef } from 'react'
import { MovieContext } from '../context/MovieContext'
import { Button, Form, Input } from '../styles/AddMovie'
import useInput from '../hooks/useInput'

export default function AddMovie() {
  const [name, setName, updateNameInput] = useInput('')
  const [price, setPrice, updatePriceInput] = useInput('')
  const [, setMovies] = useContext(MovieContext)
  const nameInput = useRef()

  const addMovie = e => {
    e.preventDefault()
    setMovies(movies => [...movies, { name, price, id: Math.random() }])
    setName('')
    setPrice('')
    nameInput.current.focus()
  }
  
  return (
    <Form onSubmit={addMovie}>
      <Input
        ref={nameInput}
        type="text"
        name="name"
        value={name}
        onChange={updateNameInput}
        placeholder="Enter Movie Name"
      />
      <Input
        type="text"
        name="price"
        value={price}
        onChange={updatePriceInput}
        placeholder="Enter Movie Price"
      />
      <Button>Submit</Button>
    </Form>
  )
}
