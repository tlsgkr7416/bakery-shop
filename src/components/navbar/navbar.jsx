import React from 'react';
import style from './navbar.module.css';
import { updateProducts } from 'data/products/actions';
import { useDispatch } from 'react-redux';


export default function Navbar() {
    const dispatch = useDispatch();
    const handleKindClick = e => {
        dispatch(updateProducts({kind: e.target.textContent}));
    };

    return (
        <nav className={style.container}>
            <div onClick={handleKindClick}>모두</div>
            <div onClick={handleKindClick}>할인상품</div>
            <div onClick={handleKindClick}>일반빵</div>
            <div onClick={handleKindClick}>크로와상</div>
            <div onClick={handleKindClick}>피자빵</div>
            <div onClick={handleKindClick}>롤케익</div>
        </nav>
    )
}
