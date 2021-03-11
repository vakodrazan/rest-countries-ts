import React from 'react'
import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background-color: white;

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
`;