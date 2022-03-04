import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../redux/actions/counter'

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  useEffect(()=>{
    console.log('update')
  })
  const dispatch = useDispatch()
  const onInc = ()=>{
    dispatch(increment())
  }
  const onDec = ()=>{
    dispatch(decrement())
  }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='d-flex'>
            <button onClick={onDec} className='btn btn-primary'>-</button>
            <h1 className='mx-5'>{counter.num}</h1>
            <button onClick={onInc} className='btn btn-primary'>+</button>
        </div>
    </div>
  )
}

export default Counter