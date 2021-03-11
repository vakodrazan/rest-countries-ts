import React from 'react'
import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background-color: var(--color-white);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0.2rem 0.4rem 0px;

    a {
        color: currentColor;
        text-decoration: none;
    }

    > * {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .mode {
        font-size: 24px;
    }
`;