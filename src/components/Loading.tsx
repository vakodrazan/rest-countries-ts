import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import LoadingIndicator from '../icons/loading-indicator.gif'
import styled from 'styled-components'

const LoadingStyle = styled.div`
  text-align: center;
`
export const Loading = () => {
  const { isLoading } = useContext(GlobalContext)
  return (
    <LoadingStyle>
      {isLoading && <img src={LoadingIndicator} alt='Loading' />}
    </LoadingStyle>
  )
}
