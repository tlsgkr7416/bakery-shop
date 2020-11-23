import React from 'react';
import style from './replyItem.module.css';
import { replyDelete } from 'data/reply/actions';
import { useDispatch } from 'react-redux';
import makeStar from '../star';
import moment from 'moment';

export default function ReplyItem({reply, userId}) {
    const dispatch = useDispatch();

    const handleDeleteClick = async () => {
        await fetch(`/reply?id=${reply.id}`, {
            method: 'DELETE',
        });
        dispatch(replyDelete(reply.id));      
    }
    return (
        <article className={style.container}>
            <div className={style.contentContainer}>{reply.content}</div>
            <ul className={style.information}>
                <li>작성자: {reply.name}</li>
                <li>등록일: {moment(reply.createdAt).format('YYYY-MM-DD HH:mm')}</li>
                <li className={style.star}>{makeStar({star: reply.grade})}</li>
                {reply.userId == userId ? <li><button onClick={handleDeleteClick}>삭제</button></li> : null}
            </ul>
        </article>
    )
}
