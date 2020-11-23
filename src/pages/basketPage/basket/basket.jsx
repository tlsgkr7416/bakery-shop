import React from 'react'
import style from './basket.module.css';
import Header from 'components/header/header';
import BasketList from '../basketList/basketList';
import BuyerInformation from '../buyerInformation/buyerInformation';
import { useSelector } from 'react-redux';

export default function Basket() {
    const cart = useSelector(store => store.carts);
    const products = Object.values(cart.data.Products);
    
    const makeSum = () => {
        return products.reduce((acc, cur) => {
              return acc + (cur.price * cur.productCart.purchaseQuantity)
        },0);       
    }

    return (
        <React.Fragment>
            <Header/>
            <main className={style.container}>
               <h1>장바구니</h1>
               <BasketList products={products} />
               <h1 className={style.sumContainer}>총 가격 : {makeSum()}</h1>
               <BuyerInformation sum={makeSum()} products={products} cartId={cart.data.id}/>
            </main>
        </React.Fragment>
    )
}
