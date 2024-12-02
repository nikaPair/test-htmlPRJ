import React from 'react';
import { MHeader, CHeader } from './Header.styled';
import Social from './ui/Social/Social';
import MainNavigation from './ui/MainNavigation/MainNavigation';
import ExtraNav from './ui/ExtraNav/ExtraNav';
const Header = () => {
    return (
        <MHeader>
            <CHeader>
                <Social />
                <MainNavigation />
                <ExtraNav />
            </CHeader>
        </MHeader>
    );
};

export default Header;
