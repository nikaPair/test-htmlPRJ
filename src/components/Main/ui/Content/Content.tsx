import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { Container, Div } from './Content.styled';
import Cart from './ui/Cart';
import ReactPaginate from 'react-paginate';
import { v4 as uuidv4 } from 'uuid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ITEMS_PER_PAGE = 9;

const Content = () => {
    const list = useSelector((state: RootState) => state.news.news);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const currentItems = list.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    return (
        <Div>
            <Container>
                {currentItems.map(item => (
                    <Cart key={uuidv4()} {...item} />
                ))}
            </Container>

            <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                containerClassName='pagination'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                activeClassName='active'
                breakLabel='...'
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                previousLabel={
                    <ArrowBackIosIcon
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out',
                            ':hover': {
                                color: '#428D26',
                            },
                        }}
                    />
                }
                nextLabel={
                    <ArrowForwardIosIcon
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out',
                            ':hover': {
                                color: '#428D26',
                            },
                        }}
                    />
                }
            />
        </Div>
    );
};

export default Content;
