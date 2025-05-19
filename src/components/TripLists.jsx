import React from 'react'

const TripLists = ({ trips }) => {
    console.log("from tripslists", trips);

    return (
        <>
            {
                trips.map(trip => (
                    <div key={trip.id} className='shadow px-6 py-4 w-[50%] rounded-md mx-auto my-2'>
                        <h2 className='text-rose-600 text-2xl'>{trip.name}</h2>
                        <p className='my-2'>From: ${trip.price}</p>
                        <p>{trip.stay}</p>
                    </div>
                ))
            }

        </>
    )
}

export default TripLists