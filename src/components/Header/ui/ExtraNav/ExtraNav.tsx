import React from 'react';
import { Container, CurrentPage, Link } from './ExtraNav.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
const ExtraNav = () => {
    const currentPage = useSelector((state: RootState) => state.currentPage.page);
    return (
        <Container>
            <CurrentPage>
                <Link href='#'>Главная</Link> / <Link href='#'>{currentPage}</Link>
            </CurrentPage>
        </Container>
    );
};

export default ExtraNav;
