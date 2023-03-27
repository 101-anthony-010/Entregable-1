import React from 'react'

const Bg = ({props}) => {
  return (
    <div  style={{ backgroundImage: `url("${props}")`}} className='fixed top-0 left-0 w-screen h-screen z-0 bg-no-repeat bg-center bg-cover'>
    probando
    </div>
  )
}

export default Bg
