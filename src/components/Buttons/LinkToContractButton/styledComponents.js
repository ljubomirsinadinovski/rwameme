import styled from 'styled-components';
export const LinkButton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: white;
    background-color: #4cafa7;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s;
    font-size: 1.5rem;


    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    &:active {
        background-color: #3e8e41;
    }
`;