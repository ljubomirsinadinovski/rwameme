import styled, { keyframes } from 'styled-components';

const appear = keyframes`
    from {
        max-height: 0;
        visibility: hidden;
        margin: 0;
    }
    to {
        max-height: inherit; 
        visibility: visible;
        margin: 30px 30px 50px;
    }
`;

export const LinkButton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: white;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s;
    font-size: 2rem;

    max-height: 0;
    visibility: hidden;
    overflow: hidden;
    margin: 0;

    animation: ${appear} 1s ease-out forwards;
    animation-delay: 7s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    &:active {
        background-color: #3e8e41;
    }
`;