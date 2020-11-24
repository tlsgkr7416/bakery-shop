import React, { useEffect, useState } from 'react'
import style from './itemList.module.css';
import Item from '../item/item';
import { fetchProducts } from 'data/products/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { updateProducts } from 'data/products/actions';

export default function ItemList() {
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();
    const { search } = useParams();

    useEffect(() => {
        if (!search) dispatch(fetchProducts());
        else dispatch(updateProducts({search}));
    }, [search]);

    return (
        products.loding ? (
            <div className={style.loadingBox}>
                <div className={style.dim}></div>
                <div className={style.circle}></div>
            </div>
        ) : (
        products.error ? (
            <div>{products.error}</div>
        ) : !products.kindData.length ? null :  (
            <section className={style.container}>
               {products.kindData.map(product => (
                   <Link to={`/detailItem/${product.id}`} key={product.id}><Item product={product} /></Link>
               ))}
            </section>
        )
        
        )
    )
}
