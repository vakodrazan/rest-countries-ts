import React from 'react'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.background};
  box-shadow: var(--color-blurry) 0 0 0.7rem 0.2rem;
  padding-top: 20px;
  padding-bottom: 7px;

  a {
    color: currentColor;
    text-decoration: none;
  }

  .heading {
    font-size: 18px;

    @media (min-width: 650px) {
      font-size: 24px;
    }
  }

  > * {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
