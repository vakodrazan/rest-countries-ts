import React from 'react'
import styled from 'styled-components'

export const Form = styled.form`
  padding-top: 64px;
  text-align: left;
  padding-bottom: 60px;

  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .search-name {
    box-shadow: var(--color-blurry) 0 0 0.7rem 0.2rem;
    background-color: var(--color-white);
    padding-left: 40px;
    padding-right: 20px;
    padding-top: 28px;
    padding-bottom: 28px;
    width: 80%;
    border: none;

    @media (min-width: 650px) {
      max-width: 60%;
    }

    input {
      border: none;
      width: 80%;
      font-size: 18px;

      &:focus {
        outline: none;
      }
    }
  }

  .search-region {
    box-shadow: var(--color-blurry) 0px 0.2rem 0.9rem 0px;
    background-color: var(--color-white);
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    border: none;
    margin-top: 54px;
    cursor: pointer;
    font-size: 18px;

    @media (min-width: 650px) {
      width: 25%;
      margin: 0;
      padding-top: 28px;
      padding-bottom: 28px;
    }

    &:hover {
      outline: none;
    }

    option {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.9rem 0px;
      background-color: var(--color-white);
      cursor: pointer;
    }
  }
`
