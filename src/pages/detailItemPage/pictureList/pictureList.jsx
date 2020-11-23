import React from 'react'
import style from './pictureList.module.css';
import Picture from '../picture/picture'

export default function PictureList({ pictures }) {
    return (
        <section className={style.container}>
            {pictures.map((picture, index) => (
                <Picture key={index} picture={picture} />
            ))}
        </section>
    )
}
