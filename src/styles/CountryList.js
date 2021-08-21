import styled from 'styled-components'

export const CountryListStyle = styled.ul`
  display: grid;
  row-gap: 44px;
  column-gap: 50px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 1fr);
  text-align: left;

  @media (min-width: 750px) {
    grid-template-columns: repeat(auto-fit, 290px);
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`

export const CountryListItem = styled.li`
  border-radius: 8px;
  box-shadow: 0 0 0.7rem 0.2rem var(--color-blurry);
  transition: var(--transition) transform, var(--transition) box-shadow;
  background-color: ${({ theme }) => theme.background};
  max-width: 350px;
  margin: auto;

  img {
    width: 100%;
    height: 214px;
    object-fit: cover;
  }
`

export const CountryListHeading = styled.h2`
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  margin: 0;
`

export const CountryListContent = styled.div`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 44px;
  transition: var(--transition) background-color;
`
export const CountryContentTitle = styled.p`
  font-weight: var(--weight-semi-bold);
  margin: 0;
  padding: 5px;
`

export const CountryContentDetailItem = styled.span`
  font-weight: var(--weight-light);
`

export const CountryListItemImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
