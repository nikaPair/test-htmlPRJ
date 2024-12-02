import React, { useEffect, useState } from 'react';
import { TContainer, Tag } from './Tags.styled';
import { LinksArr } from '../../../../mocks/mocks';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store/store';
import { onlyNews, onlyStatements, onlyAll } from '../../../../store/NewsSlice/NewsSlice';

const Tags = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.currentPage);
    const currentTags = LinksArr.find(link => link.name === currentPage.page)?.tags || [];
    const [activeTag, setActiveTag] = useState<string>(currentPage.page);

    useEffect(() => {
        setActiveTag(currentPage.page);
    }, [currentPage.page]);

    const handleTagClick = (tag: string) => {
        setActiveTag(tag);

        if (tag === 'Новости') {
            dispatch(onlyNews());
        } else if (tag === 'Статьи') {
            dispatch(onlyStatements());
        } else {
            dispatch(onlyAll());
        }
    };

    return (
        <TContainer>
            <Tag active={activeTag === currentPage.page} onClick={() => handleTagClick(currentPage.page)}>
                {currentPage.page}
            </Tag>

            {currentTags.map(tag => (
                <Tag active={activeTag === tag} key={tag} onClick={() => handleTagClick(tag)}>
                    {tag}
                </Tag>
            ))}
        </TContainer>
    );
};

export default Tags;
