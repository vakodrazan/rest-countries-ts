import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const CountryDetailListStyle = styled.article`
  padding-top: 54px;
  text-align: left;
  font-size: 16px;
`

const FlexRowLayout = css`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const CallToAction = styled(Link)`
  box-shadow: var(--detail-box-shadow);
  border-radius: 0.2rem;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  color: currentColor;
`

export const CountryBorderList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`

export const CountryBorderItem = styled(Link)`
  box-shadow: var(--detail-box-shadow);
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
`

export const CountryDetailsStyle = styled.section`
  padding-top: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 920px) {
    flex-direction: row;
  }

  @media (min-width: 1140px) {
    gap: 80px;
  }
`

export const CountryDetailContent = styled.div`
  ${FlexRowLayout}
  width: -moz-available;
  width: -webkit-fill-available;
`

export const CountryDetailContentInformation = styled.div`
  ${FlexRowLayout}

  @media (min-width: 950px) {
    flex-direction: row;
  }
  @media (min-width: 1140px) {
    gap: 80px;
  }
`

export const CountryDetailContentInfoItems = styled.div`
  ${FlexRowLayout}
  gap: 10px;
`

export const CountrFlag = styled.img`
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;

  @media (min-width: 950px) {
    width: auto;
  }
`
export const CountryDetailHeading = styled.h2`
  margin: 0;
  padding: 0;
`
