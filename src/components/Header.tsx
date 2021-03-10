import React from 'react';
import { Container } from '../styles/Container';
import { HeaderStyle } from '../styles/Header';

function Header() {
    return (
      <Container>
        <HeaderStyle>
          <h1 data-testid="header-title">Where in the world?</h1>
          <p data-testid="header-mode">Dark Mode</p>
        </HeaderStyle>
      </Container>
    )
}

export default Header
