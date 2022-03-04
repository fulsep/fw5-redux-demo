import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Upload = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)
  return (
    <>
      {auth.token===null && <Navigate to='/login' />}
      <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div>
          <button onClick={()=>dispatch({type: 'AUTH_LOGOUT'})} className='btn btn-primary'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Upload