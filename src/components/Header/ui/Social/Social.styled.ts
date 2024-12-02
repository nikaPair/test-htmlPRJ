import styled from 'styled-components';
import { ReactComponent as Telegram } from '../../../../assets/icons/tg.svg';
import { ReactComponent as Dzen } from '../../../../assets/icons/dz.svg';
import { ReactComponent as Youtube } from '../../../../assets/icons/yt.svg';
import { ReactComponent as VK } from '../../../../assets/icons/vk.svg';
import { ReactComponent as Star } from '../../../../assets/icons/star.svg';
import { ReactComponent as Cart } from '../../../../assets/icons/shopping-cart.svg';

export const TelegramIcon = styled(Telegram)``;
export const DzenIcon = styled(Dzen)``;
export const YoutubeIcon = styled(Youtube)``;
export const VKIcon = styled(VK)``;
export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
    .soc-icon {
        color: #5b5b5b;
        transition: all 0.3s ease-in-out;
        :hover {
            color: #428d26;
        }
    }
`;
export const StarIcon = styled(Star)`
    cursor: pointer;
    :hover {
        path {
            stroke: #428d26;
        }
    }
`;
export const CartIcon = styled(Cart)`
    cursor: pointer;
    :hover {
        path {
            stroke: #428d26;
        }
    }
`;
export const SocMedia = styled.div`
    background-color: #262626;

    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .soc-links {
        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;
export const LinksList = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
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
