import styled, { css } from 'styled-components';

interface Button {
    primary?: any;
}

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    border: 2px solid palevioletred;
    ${(props: Button) => props.primary && css`
        background: green;
        color: white;
        border-color: black;
    `}
`;
