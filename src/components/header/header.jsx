import React, { useRef, useState, useEffect } from 'react'
import style from './header.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

export default function Header() {
    const user = useSelector(store => store.user.data);
    const history = useHistory();
    const inputRef = useRef('');
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        history.push(`/home/${inputRef.current.value}`);
    }

    const handleHomeClick = () => {
        history.push('/home');
    }

    return (
        <header className={style.container}>
           <h1 onClick={handleHomeClick}>허니베이커리</h1>
           <div className={style.searchContainer}>
               <input type="text" placeholder="search..." ref={inputRef}/>
               <button onClick={handleSearchClick}>검색</button>
           </div>
           <ul className={style.subContainer}>
               {user.id === 'manager' ? <li><Link to="/raiseProduct">아이템 올리기</Link></li> : null}
               <li><Link to="/storeInformation">브랜드 스토리</Link></li>
               <li>구매내역</li>
               <li><Link to="/basket">장바구니</Link></li>
               <li>로그아웃</li>
           </ul>
        </header>
    )
}
