import "./imc-screen.css"
import React from 'react'


export const ImcScreen = ({imcResult}) => {
  return (
    <div className='imc--screen'>
      <span className='imc-result'>{imcResult}</span>
      <span className='imc'>IMC</span>
    </div>
  )
}

