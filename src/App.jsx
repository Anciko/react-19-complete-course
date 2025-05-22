import { useCallback, useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch';

function App() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const { data: users, loading, error } = useFetch(url);

  return (
    <>
      <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
        className='bg-green-500 text-white rounded-lg px-5 py-2 mx-2 mb-5 cursor-pointer'>All</button>

      <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/users?name=Kurtis Weissnat")}
        className='bg-green-500 text-white rounded-lg px-5 py-2 mx-2 mb-5 cursor-pointer'>Kurtis Weissnat</button>

      { error && (<p>{error}</p>) }
      {
        !error &&
        <div className='bg-amber-200 p-5 rounded-lg'>
          {
            loading ?
              (<p>Loading.....</p>) :
              users && users.map(user => (
                <p key={user.id}>{user.name}</p>
              ))
          }
        </div>
      }

    </>
  )
}

export default App
