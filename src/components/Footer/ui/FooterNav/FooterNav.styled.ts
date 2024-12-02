import styled from 'styled-components';

export const CFooterNav = styled.nav`
    width: 100%;
    background-color: #101010;
`;
export const CNavContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 70px 0px;

    @media (max-width: 1300px) {
        justify-content: center;
        gap: 50px;
    }
    @media (max-width: 850px) {
        flex-direction: column;
    }
`;
export const CNavLogo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    gap: 20px;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    color: #fff;
    font-weight: bold;

    @media (max-width: 850px) {
        text-align: center;
        align-items: center;
    }
`;
export const Logo = styled.img`
    width: 220px;
`;
export const Text = styled.p``;
export const Download = styled.a`
    cursor: pointer;
`;
export const DownloadImg = styled.img``;
export const Company = styled.p``;
export const CNavList = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 120px;

    @media (max-width: 850px) {
        gap: 50px;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .personal {
        border: 1px solid #fff;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
        padding: 13px 17px;
        text-align: center;
        cursor: pointer;
    }
`;
export const LinksTitle = styled.p`
    color: #6c6c6c;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    font-weight: bold;
`;
export const LinksList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 18px;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-wight: regular;
`;
export const ListElement = styled.li``;
export const Link = styled.a``;
