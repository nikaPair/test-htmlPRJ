import styled from 'styled-components';

export const TContainer = styled.div`
    display: flex;
    gap: 15px;
    width: 90%;
    margin: 0 auto;

    @media (max-width: 1400px) {
        justify-content: center;
    }
`;

export const Tag = styled.button<{ active: boolean }>`
    transition: all 0.3s ease-in-out;
    padding: 5px 10px;
    border: ${({ active }) => (active ? 'none' : '1px solid #428D26')};
    border-radius: 20px;
    background-color: ${({ active }) => (active ? '#428D26' : 'transparent')};
    color: ${({ active }) => (active ? '#fff' : '#428D26')};
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
`;
