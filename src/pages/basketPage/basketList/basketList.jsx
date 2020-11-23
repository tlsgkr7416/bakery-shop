import React from 'react';
import style from './basketList.module.css';
import BasketItem from '../basketItem/basketItem';

export default function BasketList({ products }) {
    
    return (
        <section className={style.container}>
            {products.map(product => (
                <BasketItem key={product.id} product={product}/>
            ))}
        </section>
    )
}
