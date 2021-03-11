import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../styles/Container';
import { HeaderStyle } from '../styles/Header';

function Header() {
    return (
      <HeaderStyle>
        <Container>
          <Link to="/">
            <h1 data-testid="header-title">Where in the world?</h1>
          </Link>
          <p className="mode" data-testid="header-mode">Dark Mode</p>
        </Container>
      </HeaderStyle>
    )
}

export default Header
