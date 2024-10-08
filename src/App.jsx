import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/counterSlice'
function App() {

  let dispatch = useDispatch();
  let count = useSelector((store) => store.counterReducer.count)

  return (
    <>
      <h1>Redux introduktion - FEND23</h1>
      <h2>{count}</h2>
      <button onClick={() => {dispatch(increment(5))}}>Increment by 5</button>
      <button onClick={() => {dispatch(increment(10))}}>Increment by 10</button>
      <button onClick={() => {dispatch(increment(20))}}>Increment by 20</button>
    </>
  )
}

export default App
