import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeIcon, LightModeIcon } from '../icons/Icons'
import { Container } from '../styles/Container'
import { ButtonMode, HeaderStyle, Heading } from '../styles/Header'
import { GlobalContext } from './GlobalContext'

function Header() {
  const { theme, toggleTheme } = useContext(GlobalContext)
  const themeMode = theme === 'light'
  return (
    <HeaderStyle>
      <Container>
        <Link to='/'>
          <Heading className='heading'>Where in the world?</Heading>
        </Link>
        <ButtonMode onClick={toggleTheme}>
          {themeMode ? LightModeIcon : DarkModeIcon}{' '}
          {themeMode ? 'Dark Mode' : 'Light Mode'}
        </ButtonMode>
      </Container>
    </HeaderStyle>
  )
}

export default Header
