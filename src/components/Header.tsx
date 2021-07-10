import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../styles/Container'
import { HeaderStyle } from '../styles/Header'
import { GlobalContext } from './GlobalContext'

function Header() {
  const { toggleTheme } = useContext(GlobalContext)
  return (
    <HeaderStyle>
      <Container>
        <Link to='/'>
          <h1>Where in the world?</h1>
        </Link>
        <button onClick={toggleTheme}>Dark Mode</button>
      </Container>
    </HeaderStyle>
  )
}

export default Header
