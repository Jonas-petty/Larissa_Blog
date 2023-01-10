import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    background-color: #F3F5F7;
    padding: 20px;
  }
`

import { db } from './firebase'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from "./Header";

import PageRoutes from './PageRoutes'

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <PageRoutes db={db}/>
      </div>
    </Router>
  )
}

export default App
