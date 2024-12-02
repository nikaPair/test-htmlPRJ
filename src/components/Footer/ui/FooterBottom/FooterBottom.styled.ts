import styled from 'styled-components';

export const CFooterBottom = styled.div`
    width: 100%;
    background-color: #262626;
`;

export const CBottomContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 28px 0px;

    .soc-icon {
        color: #5b5b5b;
        transition: all 0.3s ease-in-out;
        :hover {
            color: #428d26;
        }
    }
    @media (max-width: 850px) {
        flex-direction: column;
        gap: 20px;
    }
`;
export const CConfidentiality = styled.div`
    display: flex;
    gap: 22px;
    @media (max-width: 850px) {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
`;
export const Text = styled.a`
    color: #ababab;
    font-family: Roboto, sans-serif;
    font-size: 16px;
`;
