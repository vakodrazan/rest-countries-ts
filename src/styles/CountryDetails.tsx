import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CountryDetailListStyle = styled.article`
  padding-top: 54px;
  text-align: left;

  .call-to-action {
    box-shadow: var(--detail-box-shadow);
    border-radius: 0.2rem;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    text-decoration: none;
    color: currentColor;
  }
`

export const CountryBorderList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`

export const CountryBorderItem = styled(Link)`
  background-color: #fff;
  box-shadow: var(--detail-box-shadow);
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const CountryDetailsStyle = styled.section`
  padding-top: 54px;
`
