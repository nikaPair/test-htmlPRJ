import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

export const MenuIconStyled = styled(MenuIcon)`
    font-size: 40px !important;
    color: #fff;
    cursor: pointer;
`;
export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: 1080px) {
        gap: 50px;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    }
`;
export const CMainNavigation = styled.nav`
    padding: 35px 0;

    background-color: #101010;
`;
export const LinksList = styled.ul`
    display: flex;
    gap: 40px;
    align-items: center;

    @media (max-width: 1080px) {
        display: none;
    }
`;
export const ListElement = styled.li``;
export const Link = styled.a`
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 15px;
`;
export const AdditionalLinks = styled.div`
    display: flex;
    gap: 56px;
    align-items: center;
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }
`;
export const Personal = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`;
export const Button = styled.button`
    padding: 6px 14px;
    color: #fff;
    background-color: #428d26;
    font-family: Roboto, sans-serif;
    font-weight: regular;
    font-size: 14px;
    border: none;
    cursor: pointer;
`;

export const Logo = styled.img``;
