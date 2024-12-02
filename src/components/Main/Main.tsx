import React from 'react';
import Title from './ui/Title/Title';
import Tags from './ui/Tags/Tags';
import Content from './ui/Content/Content';
import { CMain } from './Main.styled';
const Main = () => {
    return (
        <CMain>
            <Title />
            <Tags />
            <Content />
        </CMain>
    );
};

export default Main;
