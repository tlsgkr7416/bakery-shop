import React from 'react'
import style from './picture.module.css'

export default function Picture({ picture }) {
    return (
        <article className={style.container}>
            <img src={`../../../images/${picture}`}/>
        </article>
    )
}
