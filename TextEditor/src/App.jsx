import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createGlobalStyle } from 'styled-components';

import { auth, db } from "./firebase"

import Login from './Login'
import Home from './Home';
import './App.css'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

function App() {

  const [user, loading, error] = useAuthState(auth)

  const login = ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    })
  }

  const logout = () => {
    signOut(auth)
  }
  
  return (
    <div className="App">
        <GlobalStyle />
      {user ?
        <Home
        auth={auth.currentUser}
        db={db}
        logout={logout}/> :
        <Login 
        auth={auth}
        login={login}
        isloading={loading}/>}
    </div>
  )
}

export default App
