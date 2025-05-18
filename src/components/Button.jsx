import React from 'react'

const Button = ({ setShowModal }) => {
    return (
        <button onClick={() => setShowModal(true)}
            className='cursor-pointer bg-rose-500 p-4 px-5 py-2.5 rounded-lg font-medium text-white hover:bg-rose-600'>
            Click Me
        </button>
    )
}

export default Button