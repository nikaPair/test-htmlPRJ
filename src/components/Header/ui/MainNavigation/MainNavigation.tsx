import React from 'react';
import { CMainNavigation, Logo, LinksList, ListElement, Link, MenuIconStyled } from './MainNavigation.styled';
import { Container } from './MainNavigation.styled';
import { useNavigation } from './hooks/useNavigation';
import { LinksArr } from '../../../../mocks/mocks';
import { v4 as uuidv4 } from 'uuid';
const MainNavigation = () => {
    const { handleLinkClick } = useNavigation();
    return (
        <CMainNavigation>
            <Container>
                <Logo src='https://i.ibb.co/tmh541y/image.jpg' />
                <LinksList>
                    {LinksArr.map(link => (
                        <ListElement key={uuidv4()}>
                            <Link href='#' onClick={() => handleLinkClick(link.name)}>
                                {link.name}
                            </Link>
                        </ListElement>
                    ))}
                </LinksList>
                <MenuIconStyled />
            </Container>
        </CMainNavigation>
    );
};

export default MainNavigation;
