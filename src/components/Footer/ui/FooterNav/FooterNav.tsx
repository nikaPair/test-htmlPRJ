import React from 'react';
import {
    CFooterNav,
    CNavLogo,
    CNavList,
    CNavContainer,
    Logo,
    Text,
    Download,
    DownloadImg,
    Company,
    LinksContainer,
    Link,
    LinksTitle,
    LinksList,
    ListElement,
} from './FooterNav.styled';
const FooterNav = () => {
    return (
        <CFooterNav>
            <CNavContainer>
                <CNavLogo>
                    <Logo src='https://i.ibb.co/tmh541y/image.jpg' />
                    <Text>Платформа для автоматизации ваших процессов</Text>
                    <Download>
                        <DownloadImg src='https://i.ibb.co/ggFCbmH/download.png' />
                    </Download>
                    <Company>© ООО «НПО «Фарватер» 2024 </Company>
                </CNavLogo>
                <CNavList>
                    <LinksContainer>
                        <LinksTitle>Платформа</LinksTitle>
                        <LinksList>
                            <ListElement>
                                <Link>ElcoreStore</Link>
                            </ListElement>
                            <ListElement>
                                <Link>ElcoreCloud</Link>
                            </ListElement>
                            <ListElement>
                                <Link>ElcoreIDE</Link>
                            </ListElement>
                        </LinksList>
                    </LinksContainer>
                    <LinksContainer>
                        <LinksTitle>Обучение и ресурсы</LinksTitle>
                        <LinksList>
                            <ListElement>
                                <Link>Что такое ElcorePLC</Link>
                            </ListElement>
                            <ListElement>
                                <Link>Документация</Link>
                            </ListElement>
                            <ListElement>
                                <Link>Обучающие материалы</Link>
                            </ListElement>
                            <ListElement>
                                <Link>Примеры использования</Link>
                            </ListElement>
                            <ListElement>
                                <Link>База знаний</Link>
                            </ListElement>
                        </LinksList>
                    </LinksContainer>
                    <LinksContainer>
                        <LinksTitle className='personal'>Личный кабинет</LinksTitle>
                        <LinksList>
                            <ListElement>
                                <Link>Контакты</Link>
                            </ListElement>
                            <ListElement>
                                <Link>Новости и статьи</Link>
                            </ListElement>
                            <ListElement>
                                <Link>Сообщество (Форум)</Link>
                            </ListElement>
                            <ListElement>
                                <Link>Тех поддержка</Link>
                            </ListElement>
                        </LinksList>
                    </LinksContainer>
                </CNavList>
            </CNavContainer>
        </CFooterNav>
    );
};

export default FooterNav;
