import React from 'react';
import { CCart, CartImg, Category, Title, Describtion } from './Cart.styled';

interface CartProps {
    img: string;
    type: string;
    title: string;
    description: string;
    date?: string;
}

const Cart = ({ img, type, title, description, date }: CartProps) => {
    return (
        <CCart>
            <CartImg src={img} alt='' />
            <Category>{date ? `${date} / ${type}` : type}</Category>
            <Title>{title}</Title>
            <Describtion>{description}</Describtion>
        </CCart>
    );
};

export default Cart;
