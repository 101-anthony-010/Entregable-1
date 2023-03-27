import './App.css'
import en from './data/phraseEn.json'
import es from './data/phraseEs.json'
import Cart from './components/cart'
import { useState } from 'react'
import Button from './components/button'
import Author from './components/author'
import Bg from './components/bg'

function App() {
  const list = ['/fortuna-2/img-1.jpg','/fortuna-2/img-2.jpg','/fortuna-2/img-3.jpg','/fortuna-2/img-4.jpg']
  
  const getRandom = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]
  }
  
  const [quote, setQuote] = useState(getRandom(es))
  const [image, setImage] = useState(getRandom(list))

  function next() {
    setQuote(getRandom(es))
    setImage(getRandom(list))
  }

  return (
    <div className="flex flex-col content-center">
      <Bg props={image}></Bg>
      <h2 className='z-50 m-auto text-2xl font-bold text-white text-center mb-16 max-w-xs shadow-tittle'>GALLETAS DE LA FORTUNA</h2>
      <div className='z-50 mx-2.5 px-10 py-14 container-text max-w-sm bg-no-repeat bg-center bg-contain' style={{ backgroundImage: "url('/container-text.png')"}}>
        <Cart quote={quote}></Cart>
        <div className='flex justify-between'>
          <Author quote={quote}></Author>
          <img src="/Vector.jpg" className='relative absolute bottom-3' alt=""/>
        </div>
      </div>
      <div className='flex justify-center mt-6'>
        <Button next={next}></Button>
      </div>
    </div>
  )
}

export default App
