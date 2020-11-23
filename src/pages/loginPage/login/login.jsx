import React from 'react'
import style from './login.module.css'
import { Link } from "react-router-dom"

export default function Login() {

    return (
        <div className={style.container}>
           <h1>허니베이커리</h1>
           <main className={style.loginContainer}>
               <form action="/account/login" method="POST">
                 <div className={style.inputContainer}>
                     <input type="text" placeholder="아이디" name="id"></input>
                     <input type="password" placeholder="비밀번호" name="password"></input>
                 </div>
                 <div className={style.buttonContainer}>
                     <button type="submit">로그인</button>
                     <Link to="/membership">
                         <button>회원가입</button>
                     </Link>
                 </div>
               </form> 
               <div className={style.authLoginContainer}>
                 <button ><a href="http://localhost:3001/auth/facebook">페이스북 로그인</a></button>
                 <button><a href="http://localhost:3001/auth/kakao">카카오 로그인</a></button>
                </div> 
           </main>  
        </div>    
    )    
}                        