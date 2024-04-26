import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 20px;
    margin: 20px 0;
`;

export const Divider = styled.hr`
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    margin: 20px 0;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: ${({inverse}) => inverse ? 'row-reverse' : 'row'};
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    justify-content: center;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TextContent = styled.div`
    padding: 20px;
    flex: 1;
    color: #213547;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const CardTitle = styled.h1`
    font-size: 2.5rem;
    font-family: 'lt-score', sans-serif;
    margin-bottom: 20px;
`

export const CardDescription = styled.h1`
    font-size: 2rem;

`

export const Image = styled.img`
    max-width: 50%;
    height: auto; // Keeps the aspect ratio of the image
    object-fit: cover; // Covers the available area without stretching the image
    @media (max-width: 768px) {
        align-self: center;
    }
`;