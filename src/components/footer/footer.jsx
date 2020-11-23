import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <footer className={style.container}>
           <div>대표:</div>
           <div>가게위치:</div>
           <div>전화번호:</div>
        </footer>
    )
}
