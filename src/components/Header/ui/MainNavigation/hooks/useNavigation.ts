import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../../../store/CurrentPageSlice/CurrentPageSlice';

export const useNavigation = () => {
    const dispatch = useDispatch();

    const handleLinkClick = (link: string) => {
        dispatch(setCurrentPage(link)); 
    };

    return { handleLinkClick };
};
