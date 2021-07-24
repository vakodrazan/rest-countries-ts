import styled from 'styled-components'
import { Container } from './Container'

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.background};
  box-shadow: var(--color-blurry) 0 0 0.7rem 0.2rem;
  padding-top: 30px;
  padding-bottom: 15px;

  a {
    color: currentColor;
    text-decoration: none;
  }

  > ${Container} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Heading = styled.h1`
  font-size: 19px;
  font-weight: 800;

  @media (min-width: 400px) {
    font-size: 24px;
  }

  @media (min-width: 750px) {
    font-size: 28px;
  }
`

export const ButtonMode = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  gap: 6px;

  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 650px) {
    font-size: 20px;
    gap: 10px;
  }
`
