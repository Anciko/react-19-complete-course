import { useEffect, useState } from 'react'

import './App.css'
import TripLists from './components/TripLists'
import Button from './components/Button'

function App() {
  const [trips, setTrips] = useState([])

  const [url, setUrl] = useState("http://localhost:3000/trips")
  // USEFFECT HOOK AND ITS DEPENDENCY
  // with [] empty dependency useEffect hook run once after the component render
  // with dependency, useEffect hook will run again after that dependency change
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => setTrips(result))
      .catch(err => console.log(err))
  }, [url]);
    
  return (
    <>
      <div className='w-[50%] mx-auto my-2' >

        <div className='text-center mb-2'>
          <Button onClick={()=> setUrl("http://localhost:3000/trips")}>All</Button>
          <Button onClick={() => setUrl("http://localhost:3000/trips?destination=Japan")}>Japan</Button>
        </div>
        {
          trips && <TripLists trips={trips} />
        }

      </div>
    </>
  )
}

export default App
