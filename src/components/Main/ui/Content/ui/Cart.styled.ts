import styled from 'styled-components';

export const CCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
`;

export const CartImg = styled.img`
    width: 400px;
    height: 220px;
    object-fit: cover;

    @media (max-width: 500px) {
        width: 100%;
    }
`;
export const Category = styled.p`
    color: #6c6c6c;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
`;
export const Title = styled.p`
    color: #262626;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
`;
export const Describtion = styled.p`
    color: #262626;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;
