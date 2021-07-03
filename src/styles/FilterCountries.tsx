import styled, { css } from 'styled-components'

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

const DropdownGlobalStyle = css`
  color: var(--color-dark-blue3);
`

export const Form = styled.form`
  ${flexColumn}
  padding-top: 64px;
  text-align: left;
  padding-bottom: 60px;
  gap: 39px;

  @media (min-width: 650px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .search-name {
    box-shadow: var(--color-blurry) 0 0 0.7rem 0.2rem;
    background-color: var(--color-white);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 28px;
    padding-bottom: 28px;
    border: none;

    @media (min-width: 650px) {
      width: 30%;
      max-width: 30%;
    }

    input {
      border: none;
      width: 100%;
      font-size: 16px;

      &:focus {
        outline: none;
      }
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
  background-color: var(--color-white);
`

export const SelectDropDownContainer = styled.div`
  ${flexColumn}
  ${DropdownGlobalStyle}
  gap: 10px;
  position: relative;
  max-width: 60%;
  font-weight: 600;

  z-index: 3;

  @media (min-width: 650px) {
    max-width: 40%;
    width: 30%;
  }
  @media (min-width: 750px) {
    max-width: 25%;
    width: 25%;
  }

  @media (min-width: 1440px) {
    max-width: 20%;
    width: 18%;
  }
`

export const SelectDropDown = styled.label`
  box-shadow: var(--color-blurry) 0px 0.2rem 0.9rem 0px;
  background-color: var(--color-white);
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
    padding-top: 28px;
    padding-bottom: 28px;
  }
`

export const DropDownItem = styled.button`
  ${DropdownGlobalStyle}
  border: none;
  width: 100%;
  cursor: pointer;
  text-align: left;
  background-color: var(--color-white);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;

  &:hover {
    background-color: var(--color-light-gray);
  }

  &:focus {
    outline: none;
  }
`
