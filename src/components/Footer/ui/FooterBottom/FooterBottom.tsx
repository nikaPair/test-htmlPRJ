import React from 'react';
import { CFooterBottom, CBottomContainer, CConfidentiality, Text } from './FooterBottom.styled';
import {
    LinksList,
    ListElement,
    Link,
    TelegramIcon,
    VKIcon,
    DzenIcon,
    YoutubeIcon,
} from '../../../Header/ui/Social/Social.styled';
const FooterBottom = () => {
    return (
        <CFooterBottom>
            <CBottomContainer>
                <LinksList className='soc-links'>
                    <ListElement>
                        <Link href='#'>
                            <TelegramIcon className='soc-icon' />
                        </Link>
                    </ListElement>

                    <ListElement>
                        <Link href='#'>
                            <DzenIcon className='soc-icon' />
                        </Link>
                    </ListElement>

                    <ListElement>
                        <Link href='#'>
                            <YoutubeIcon className='soc-icon' />
                        </Link>
                    </ListElement>

                    <ListElement>
                        <Link href='#'>
                            <VKIcon className='soc-icon' />
                        </Link>
                    </ListElement>
                </LinksList>

                <CConfidentiality>
                    <Text>Политика конфиденциальности</Text>
                    <Text>Карта сайта</Text>
                </CConfidentiality>
            </CBottomContainer>
        </CFooterBottom>
    );
};

export default FooterBottom;
