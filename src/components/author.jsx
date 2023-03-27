import React from 'react'

const Author = ({quote}) => {
  return (
    <div className='' >
      <p className='text-slate-600 font-bold text-xs'>Author: {quote.author}</p>
    </div>
  )
}

export default Author
