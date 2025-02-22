import styled, { css } from 'styled-components'

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

const DropdownGlobalStyle = css`
  color: ${({ theme }) => theme.text};
`

export const Form = styled.form`
  ${flexColumn}
  padding-top: 64px;
  text-align: left;
  padding-bottom: 60px;
  gap: 39px;

  @media (min-width: 750px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const InputSearch = styled.label`
  display: flex;
  flex-direction: row;
  gap: 10px;
  box-shadow: var(--color-blurry) 0 0 0.7rem 0.2rem;
  background-color: ${({ theme }) => theme.background};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.inputText};
  border-radius: 8px;

  @media (min-width: 750px) {
    width: 30%;
    max-width: 30%;
  }

  input {
    border: none;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    width: 100%;
    font-size: 16px;

    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.inputText};
    }

    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.inputText};
    }

    &::placeholder {
      color: ${({ theme }) => theme.inputText};
    }

    &:focus {
      outline: none;
    }
  }
`

export const DropDownList = styled.div`
  ${flexColumn}
  align-items: flex-start;

  position: absolute;
  width: 100%;
  top: 109%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
`

export const SelectDropDownContainer = styled.div`
  ${flexColumn}
  ${DropdownGlobalStyle}
  gap: 10px;
  position: relative;
  font-weight: 600;
  z-index: 3;

  @media (min-width: 750px) {
    max-width: 60%;
    width: 55%;
  }

  @media (min-width: 920px) {
    max-width: 65%;
    width: 60%;
  }
`

export const SelectDropDown = styled.label`
  background-color: ${({ theme }) => theme.background};
  box-shadow: var(--color-blurry) 0px 0.2rem 0.9rem 0px;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  @media (min-width: 650px) {
    margin: 0;
  }
`

export const DropDownItem = styled.button`
  ${DropdownGlobalStyle}
  border: none;
  width: 100%;
  cursor: pointer;
  text-align: left;
  background-color: ${({ theme }) => theme.background};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.body};
  }

  &:focus {
    outline: none;
  }
`

export const Wrapper = styled.div`
  ${flexColumn}
  gap: 10px;
  max-width: 60%;
  @media (min-width: 750px) {
    flex-direction: row;
    max-width: 50%;
    width: 50%;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 920px) {
    max-width: 30%;
    width: 30%;
  }
`

export const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  box-shadow: var(--color-blurry) 0px 0.2rem 0.9rem 0px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`
