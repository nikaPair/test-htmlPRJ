import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #262626;
    @media (max-width: 768px) {
        justify-content: center;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

export const CurrentPage = styled.p`
    margin: 0 auto;
    width: 90%;
    padding: 10px 0;
    display: flex;
    color: #fff;
    font-family: Roboto, sans-serif;

    gap: 10px;
`;

export const Link = styled.a`
    color: #fff;
`;
