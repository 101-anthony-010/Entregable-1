import React from 'react'

const Cart = ({quote}) => {

  return (
    <div className='flex content-center flex-col text-center mb-4'>
      <p className='text-sm'>{quote.phrase}</p>
    </div>
  )
}

export default Cart
