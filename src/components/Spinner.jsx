import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='relative h-screen	'>
      <div className='spinner mx-auto absolute bottom-1/2 left-1/2 '></div>
    </div>
  )
}

export default Spinner