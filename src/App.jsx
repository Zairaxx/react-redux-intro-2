import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/counterSlice'
import { addUser } from './redux/userSlice'
import { getUser } from './redux/userSlice'
function App() {

  let dispatch = useDispatch();
  let count = useSelector((store) => store.counterReducer.count)
  let users = useSelector(store => store.userReducer.users)

  let [username, setUsername] = useState("");

  return (
    <>
      <h1>Redux introduktion - FEND23</h1>
      <h2>{count}</h2>
      <button onClick={() => {dispatch(increment(5))}}>Increment by 5</button>
      <button onClick={() => {dispatch(increment(10))}}>Increment by 10</button>
      <button onClick={() => {dispatch(increment(20))}}>Increment by 20</button>

      <input type="text" onChange={(event) => {
        console.log(username);
        setUsername(event.target.value)}}/>
      {/* Dispatch en action 'addUser' med ett värde/payload (username) som är ett lokalt state */}
      <button onClick={() => {dispatch(addUser(username))}}>Add user</button>




      <button onClick={() => {dispatch(getUser())}}>Add random user</button>


      <h2>Users:</h2>
      <ul>
        {users.map((user,i) => <li key={i}>{user}</li>)}
      </ul>

    </>
  )
}

export default App
