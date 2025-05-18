import './App.css'
import Button from './components/Button'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {
  // IN THIS SECTION, WE PASS THE FUNCTION AS A PROP. AND ABOUT PORTAL
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Button setShowModal={setShowModal} />
      {
        showModal &&  <Modal setShowModal={setShowModal} />
      }
    </>
  )
}

export default App
