import React, { useEffect, useState } from 'react';
import style from './home.module.css';
import Navbar from 'components/navbar/navbar';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import ItemList from '../itemList/itemList';
import SaleProduct from '../saleProduct/saleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from 'data/user/actions';
import { fetchCart } from 'data/carts/actions';
import io from 'socket.io-client';

export default function Home() {
    const user = useSelector(store => store.user);
    const cart = useSelector(store => store.carts);
    const dispatch = useDispatch();
    const [socketData, setSocketData] = useState({});
    
    useEffect(() => {
       dispatch(fetchUser());     
       dispatch(fetchCart());
       const socket = io.connect();
        
       socket.on('server sale message', (data) => {
            setSocketData(data);
       });
       
       return () => socket.close();
    }, []);

    const handleSaleRemove = () => {
        setSocketData({});
    }
    
    return (   //로딩 한번 다시 보기 loding 오타..
        user.loding || cart.loding ? (
        <div>로딩중...</div>
        ) : user.error || cart.error ? (
        <div>{user.error || cart.error}</div>
        ) : (
        (<React.Fragment>
            <Header />
            <div className={style.container}>
                <Navbar />
                <ItemList />
                {Object.keys(socketData).length ? <SaleProduct socketData={socketData} handleSaleRemove={handleSaleRemove} /> : null}
            </div>
            <Footer />
        </React.Fragment>))
        
    )
}
