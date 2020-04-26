import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  `
export const Input = styled.input`
  border: 1px solid #555;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin-right: 5px;
  padding: 10px;
  left: 50px;
  width: 200px;
  cursor: pointer;
  &:focus {
    border-style: none;
  }
`
export const Button = styled.button`
  background-color: #555;
  border: 1px solid #555;
  border-radius: 5px;
  box-shadow: none;
  color: #fff;
  font-size: .8rem;
  padding: 10px;
  width: 100px;
  &:hover {
    background-color: #777;
    border: 1px solid #777;
  }
`
