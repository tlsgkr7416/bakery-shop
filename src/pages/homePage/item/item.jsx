import React from 'react';
import style from './item.module.css'

export default function Item({ product }) {
    const picture = JSON.parse(product.picture);
    
    return (
        <article className={style.container}>
            <div className={style.imgContainer}>
                <img src={`../../../images/${picture[0]}`}/>
            </div>
            <ul className={style.itemContent}>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>마감시간</li>
            </ul>
        </article>
    )
}
