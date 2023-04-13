import "./data-form.css"
import React, {useState} from 'react'
import { KgInput } from './KgInput'
import { CmInput } from './CmInput'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const CalculateButton = styled(Button)({
  backgroundColor: "#5e5ce5"
})
export const DataForm = ({setIMC}) => {

  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()

  const getIMC = (weight, height) => {
    return (weight / Math.pow(height / 100, 2)).toFixed(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIMC(getIMC(e.target[0].value, e.target[2].value))
    console.log(getIMC(e.target[0].value, e.target[2].value))
    // setWeight(e.target[0].value)
    // setHeight(e.target[2].value)
  }
  return (
    <form className='data-form' onSubmit={handleSubmit}>
      <KgInput/>
      <CmInput/>
      <CalculateButton variant="contained" type="submit">Calculate</CalculateButton>
    </form>
  )
}
