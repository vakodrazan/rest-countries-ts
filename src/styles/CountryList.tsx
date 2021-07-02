import React from 'react'
import styled from 'styled-components'

export const CountryListStyle = styled.ul`
  display: grid;
  row-gap: 44px;
  column-gap: 50px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
  text-align: left;

  a {
    color: currentColor;
    text-decoration: none;
  }

  .country-list {
    border-radius: 8px;
    box-shadow: 0 0 0.7rem 0.2rem var(--color-blurry);
    transition: var(--transition) transform, var(--transition) box-shadow;
    background-color: var(--color-white);

    &-heading {
      padding-left: 32px;
      padding-top: 32px;
      padding-right: 32px;
      margin: 0;
    }
    &-content {
      padding-top: 32px;
      padding-left: 32px;
      padding-right: 32px;
      padding-bottom: 44px;
      transition: var(--transition) background-color;

      &-detail {
        font-weight: var(--weight-semi-bold);
        margin: 0;
        padding: 5px;

        &-item {
          font-weight: var(--weight-light);
        }
      }
    }

    img {
      width: 100%;
      height: 214px;
      object-fit: cover;
    }
  }
`
