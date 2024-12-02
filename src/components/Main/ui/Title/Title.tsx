import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
const Title = () => {
    const title = useSelector((state: RootState) => state.currentPage.page);
    return (
        <div style={{ textAlign: 'center', width: '100%', padding: '70px 0 50px 0' }}>
            <h1 style={{ color: '#262626', fontFamily: 'Roboto', fontSize: '36px' }}>{title}</h1>
        </div>
    );
};

export default Title;
