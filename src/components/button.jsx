import React from 'react'

const Button = ({next}) => {
   
  return (
    <div className='rounded-lg border-2 border-white mt-16'>
        <button className='px-14 py-2 m-auto bg-white opacity-60 rounded-lg' onClick={next}>
            Ver otro
        </button>
    </div>
  )
}

export default Button
