import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login } from '../redux/actions/auth'

const Login = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const onSubmit = (e)=>{
    e.preventDefault()
    const email = e.target.elements['email'].value
    const password = e.target.elements['password'].value
    dispatch(login(email, password))
  }
  return (
    <>
      {auth.token!==null && <Navigate to='/upload' />}
      <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <form onSubmit={onSubmit}>
          {auth.isError && auth.errorMsg && <div className='alert alert-danger mb-5'>{auth.errorMsg}</div>}
          <input name='email' className='form-control' type='email' placeholder='email' />
          <input name='password' className='form-control' type='password' placeholder='password' />
          <div className='d-grid'>
            <button disabled={auth.isLoading} className='btn btn-primary'>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login