import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  @media (min-width: 1440px) {
    max-width: 1310px;
    margin: auto;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`;
