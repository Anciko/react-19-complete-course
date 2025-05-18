import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ setShowModal }) => {
  return (
    createPortal(<div className='w-full h-full fixed top-0 left-0  bg-modal-box' onClick={() => setShowModal(false)}>
      <div className='px-5 py-7 bg-white max-w-70 my-40 m-auto rounded-md'>
        <h1 className='text-2xl text-cyan-500 mb-2'>Best Shop Ever</h1>
        <p> <span className='text-3xl text-rose-500'>20%</span> Discount</p>
      </div>
    </div>, document.getElementById('modal'))
  )
}

export default Modal