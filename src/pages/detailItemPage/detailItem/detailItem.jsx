import React, { useEffect, useRef, useState } from 'react'
import style from './detailItem.module.css';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import SliderItem from '../sliderItem/sliderItem';
import PictureList from '../pictureList/pictureList';
import ReplyList from '../replyList/replyList';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { cartAddItem } from 'data/carts/actions';
import io from 'socket.io-client';
const socket = io.connect();

export default function DetailItem() {
    const { id } = useParams();
    const user = useSelector(store => store.user);
    if (!user.data.id) {
        window.location.href="http://localhost:3000"
    }

    const inputAmount = useRef();
    const dispatch = useDispatch();

    const product = useSelector(store => (    //filter로 state값을 변경시켜줘서 좀 문제가 되나 고민....만약 state값 변경되면 실행되나 test
        store.products.data.filter(product => (  //state 값 변경 안되면 실행 안되나 test
            product.id == id
        ))[0]
    ));

    
    const [amount, setAmount] = useState(1);
    const cart = useSelector(store => store.carts);
    const userId = user.data.id;
    const pictures = JSON.parse(product.picture);

    const handleBannerClick = () => {
        socket.emit('client sale message', {
            name: product.name,
            price: product.price,
            salePrice: product.salePrice,
            saleDate: product.saleDate,
            picture: pictures[0],
            saleTime: product.saleTime,
        });
    }

    useEffect(() => {
        return () => {
            return socket.close();
        }
    }, [])

    const hanldeCartClick = async () => {
    
    const response = await fetch('/cart', {
            method: 'POST',
            body: JSON.stringify({
                cartId: cart.data.id,
                productId: product.id,
                purchaseQuantity: amount,
            }),
            headers:{
                'Content-Type': 'application/json'
            }}).then(res => res.json()); 
        
            dispatch(cartAddItem(response));
    }

    const handleAmountPlusClick = () => {
        setAmount(amount + 1);
    }

    const handleAmountMinClick = () => {
        if (amount > 1) setAmount(amount - 1);
    }

    return (
        <React.Fragment>
            <Header />
            <main className={style.container}>
                <div className={style.topContainer}>
                    <SliderItem pictures={pictures} />
                    <ul className={style.itemTitle}>
                       <li>이름: {product.name}</li>
                       <li>가격: {product.price*amount}</li>
                       {userId === 'manager' ? (
                        <li><button className={style.banner} onClick={handleBannerClick}>광고 올리기</button></li>
                       ) :(
                       <>
                        <li className={style.quantityContainer}>
                           <span className={style.quantityFont}>수량</span>
                           <div className={style.quantity}>
                               <span className={style.quantityButton} onClick={handleAmountPlusClick}> ▲</span>
                               <span><input type="text" value={amount} ref={inputAmount} readOnly/></span>
                               <span className={style.quantityButton} onClick={handleAmountMinClick}> ▼</span>
                           </div>
                           </li>
                        <li>
                           <button>구매하기</button>
                           <button onClick={hanldeCartClick}>장바구니</button>
                        </li>
                       </>
                       )}
                    </ul>
                </div>
                <h2 className={style.subContent}>
                    제품의 상세내용과 상세한 사진입니다<br/>
                    제품의 이미지는 다소 실제와 다를 수 있습니다
                </h2>
                <PictureList pictures={pictures} />
                <div className={style.content}>
                    {product.content}
                </div>
                <ReplyList userName={user.data.name} userId={userId} productId={product.id} />
            </main>
            
        </React.Fragment>
    )
}
