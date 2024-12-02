import styled from 'styled-components';
export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 60px 24px;
    justify-content: space-between;

    @media (max-width: 1400px) {
        width: 80%;
        gap: 40px 40px;
    }

    @media (max-width: 1056px) {
        width: 90%;
        justify-content: center;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 15px;
        padding: 40px 0;
    }

    .page-link {
        cursor: pointer;
        color: #428d26;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        padding: 5px;
        border: 1px solid transparent;
        transition: all 0.3s ease-in-out;
        border-radius: 3px;
    }

    .page-link:hover {
        border: 1px solid #428d26;
    }

    .active .page-link {
        background-color: #428d26;
        color: white;
    }

    .page-item.disabled .page-link {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
