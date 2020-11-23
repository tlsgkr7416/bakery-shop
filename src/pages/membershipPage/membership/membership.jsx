import React from 'react';
import style from './membership.module.css';

export default function Membership() {
    return (
        <div className={style.container}>
          <h1>회원가입</h1>
            <form action="/account/membership" method="POST">
              <ul className={style.inputContainer}>
                 <li><input type="text" name="id" placeholder="아이디" /></li>
                 <li><input type="password" name="password" placeholder="비밀번호" /></li>
                 <li><input type="text" name="name" placeholder="이름" /></li>
                 <li><input type="text" name="email" placeholder="이메일" /></li>
              </ul>
              <div className={style.buttonContainer}>
                  <button type="submit">확인</button>
                  <button>취소</button>
              </div>
            </form>
        </div>
    )
}
