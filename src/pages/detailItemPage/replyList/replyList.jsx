import React, { useState, useEffect, useRef } from 'react'
import style from './replyList.module.css';
import Pagination from '../pagination/pagination';
import { useDispatch, useSelector } from 'react-redux';
import ReplyItem from '../replyItem/replyItem';
import { requestReply, replyUpdate } from 'data/reply/actions';
import makeStar from '../star';

export default function ReplyList({userName, productId, userId}) {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [star, setStar] = useState(0);
    const inputContent = useRef();
    const dispatch = useDispatch();
    const replys = useSelector(store => store.replys);

    useEffect(() => {
        setLoading(false);
         const fetchPosts = async () => {
           const res = await fetch(`/reply?productId=${productId}`).then(res => res.json());
           dispatch(requestReply(res));        
           setLoading(false);
         }
         fetchPosts()
    }, [productId]);

    const handelPageClick = (number) => {
        setCurrentPage(number)
    }

    const handleStarClick = (e) => {
        setStar(e.target.id);
    }

    const handleReplyClick = async () => {
        const response = await fetch('/reply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: userName,
                content: inputContent.current.value,
                grade: star,
                productId,
                userId,
            })
         }).then(res => res.json());
        
         dispatch(replyUpdate(response));
         inputContent.current.value = '';
         setStar(0)
    }

    const lastIndexPost = postsPerPage * currentPage;
    const firstIndexPost = lastIndexPost - postsPerPage;
    const currentPagePosts = replys.slice(firstIndexPost, lastIndexPost);
    return (
       <section className={style.container}>
           <h1>상품평</h1>
           {loading ? (<div className={style.loadingBox}>
                        <div className={style.dim}></div>
                        <div className={style.circle}></div>
                       </div>) : 
           currentPagePosts.map((reply, index) => <ReplyItem key={index} reply={reply} userId={userId}/>)}
           <div className={style.inputContainer}>
               <span>댓글 :</span>
               <div className={style.inputContent}>
                   <input type="text" placeholder="댓글 입력" ref={inputContent} />
                   <button onClick={handleReplyClick}>확인</button>
               </div>
               <ul className={style.starContainer}>
                   {makeStar({handleStarClick, star})}
               </ul>
            </div>
           <Pagination replys={replys} postsPerPage={postsPerPage} handelPageClick={handelPageClick} />
       </section> 
    )
}
