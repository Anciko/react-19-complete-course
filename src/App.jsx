import { useCallback, useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard';

function App() {
  const [users, setUser] = useState([]);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

  const fetchUsers = useCallback(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => setUser(result))
      .catch(err => console.log(err))
  }, [url])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  console.log(users);


  return (
    <>
      <button className='bg-rose-500 mx-2 px-4 py-2 cursor-pointer rounded-lg text-white' onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}>All</button>
      <button className='bg-rose-500 mx-2 px-4 py-2 cursor-pointer rounded-lg text-white' onClick={() => setUrl("https://jsonplaceholder.typicode.com/users?name=Ervin Howell")}>Ervin Howell</button>
      {
        users && users.map(user => (
          <UserCard key={user.id} name={user.name} />
        ))
      }
    </>
  )
}

export default App
