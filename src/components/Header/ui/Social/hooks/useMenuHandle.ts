import { useState } from 'react';
export const useMenuHandle = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent) => {
        if (event.currentTarget instanceof Element) {
            setAnchorEl(event.currentTarget as any);
        } else {
            setAnchorEl(null);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return {
        open,
        anchorEl,
        handleClick,
        handleClose,
    };
};
