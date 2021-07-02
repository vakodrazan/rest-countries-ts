import React from 'react'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: var(--color-white);
  box-shadow: var(--color-blurry) 0 0 0.7rem 0.2rem;

  a {
    color: currentColor;
    text-decoration: none;
  }

  > * {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .mode {
    font-size: 24px;
  }
`
