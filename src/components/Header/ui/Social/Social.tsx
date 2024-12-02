import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Container } from './Social.styled';
import {
    SocMedia,
    LinksList,
    ListElement,
    Link,
    AdditionalLinks,
    Personal,
    Button,
    TelegramIcon,
    DzenIcon,
    YoutubeIcon,
    VKIcon,
    StarIcon,
    CartIcon,
} from './Social.styled';

import { useMenuHandle } from './hooks/useMenuHandle';
const Social = () => {
    const { open, anchorEl, handleClick, handleClose } = useMenuHandle();
    return (
        <SocMedia>
            <Container>
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
                <AdditionalLinks>
                    <LinksList>
                        <ListElement>
                            <Link href='#'>Форум</Link>
                        </ListElement>
                        <ListElement>
                            <Link href='#'>Поиск</Link>
                        </ListElement>
                        <ListElement>
                            <Link href='#'>Контакты</Link>
                        </ListElement>
                    </LinksList>
                    <Personal>
                        <StarIcon />
                        <CartIcon />
                        <Button
                            onClick={handleClick}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                        >
                            Личный кабинет
                        </Button>
                    </Personal>
                </AdditionalLinks>
            </Container>

            <Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonIcon fontSize='small' />
                    </ListItemIcon>
                    Профиль
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize='small' />
                    </ListItemIcon>
                    Настройки
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize='small' />
                    </ListItemIcon>
                    Выйти
                </MenuItem>
            </Menu>
        </SocMedia>
    );
};

export default Social;
