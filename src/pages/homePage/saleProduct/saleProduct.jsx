import React from 'react'
import style from './saleProduct.module.css';

export default function SaleProduct({ socketData, handleSaleRemove }) {

    const handelDeleteClick = () => {
        handleSaleRemove();
    }
    
    return (
        <section className={style.container}>
            <div className={style.imgContainer}>
               {socketData.picture ? <img src={`../../../images/${socketData.picture}`} /> : null}
            </div>
            <ul className={style.itemInformation}>
                <li className={style.saleProduct}>세일상품 </li>
                <li>제품명: {socketData.name} </li>
                {socketData.salePrice ? (
                    <>
                      <li className={style.priceContainer}>가격: <span className={style.price}>{socketData.price}원</span><span>{socketData.salePrice}원</span></li>
                      <li className={style.timeContainer}>
                          <div>마감 시간: </div>
                          <div className={style.date}>{socketData.saleDate}</div>
                          <div>{socketData.saleTime}</div>
                      </li>
                      
                    </>
                ) : (
                    <li>가격: <span>{socketData.price}원</span></li>
                )}
            </ul>
            <div className={style.closeContainer}><i className="fas fa-times" onClick={handelDeleteClick}></i></div>
        </section>
    )
}
