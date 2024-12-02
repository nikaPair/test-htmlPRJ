import React from 'react';
import { CFooter } from './Footer.styled';
import FooterNav from './ui/FooterNav/FooterNav';
import FooterBottom from './ui/FooterBottom/FooterBottom';
const Footer = () => {
    return (
        <CFooter>
            <FooterNav />
            <FooterBottom />
        </CFooter>
    );
};

export default Footer;
