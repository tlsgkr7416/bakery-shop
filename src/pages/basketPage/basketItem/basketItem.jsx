import React from 'react'
import style from './basketItem.module.css'

export default function BasketItem({ product }) {
    
    const picture = JSON.parse(product.picture)[0];

    return (
        <article className={style.container}>
            <div className={style.imgContainer}>
                <img src={`../../../images/${picture}`}/>
            </div>
            <span>수량 : {product.productCart.purchaseQuantity}</span>
            <span>{product.price * product.productCart.purchaseQuantity}</span>
        </article>
    )
}
