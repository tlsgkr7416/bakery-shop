import React from 'react'
import style from './pagination.module.css';

export default function Pagination({replys, postsPerPage, handelPageClick}) {
    const array = [];

    for (let i = 1; Math.ceil(replys.length/postsPerPage) >= i; i++) {
         array.push(i);
    }

    return (
        <aside className={style.container}>
           {array.map((item, index) => <span key={index} onClick={(event) => {handelPageClick(event.target.textContent)}}>{item}</span>)}
        </aside>
    )
}
