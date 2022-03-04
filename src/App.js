import { createBrowserHistory } from 'history'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { unstable_HistoryRouter as Router, Routes, Route } from 'react-router-dom'

import Counter from './pages/Counter'
import Home from './pages/Home'
import Login from './pages/Login'
import Upload from './pages/Upload'

const App = () => {
  const history = createBrowserHistory({window})
  const dispatch = useDispatch()
  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    if(token){
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: {
              token
            }
          }
        }
      })
    }
  },)
  return (
    <Router history={history}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='counter' element={<Counter />} />
        <Route path='login' element={<Login />} />
        <Route path='upload' element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App