import { createGlobalStyle } from 'styled-components'

export const lightMode = {
  body: 'var(--color-light-gray)',
  text: 'var(--color-dark-blue3)',
  background: 'var(--color-white)',
  inputText: 'var(--color-dark-gray)',
}

export const darkMode = {
  body: 'var(--color-dark-blue2)',
  text: 'var(--color-white)',
  background: 'var(--color-dark-blue)',
  inputText: 'var(--color-white)',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`
