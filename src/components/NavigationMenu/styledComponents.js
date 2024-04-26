import styled from 'styled-components';
import {Link} from "react-scroll";

export const Container = styled.nav`
    background: #333;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    margin-top: -30px;
    margin-bottom: 30px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        padding: 10px 15px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 18px;
        transition: color 0.3s;
    }

    a:hover {
        color: #04A6A4;
    }

    .menu-icon {
        cursor: pointer;
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;

        div {
            background: #fff;
            height: 4px;
            width: 100%;
            border-radius: 10px;
        }

        @media (max-width: 768px) {
            display: flex;
        }
    }

    @media (max-width: 768px) {
        align-self: flex-start;
        margin-top: 35px;
        ul {
            flex-direction: column;
            display: ${({$isOpen}) => $isOpen ? 'flex' : 'none'};
        }
    }
`;

export const MenuButton = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    background-color: #007bff; // Use your desired button color
    color: white;
    text-align: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`