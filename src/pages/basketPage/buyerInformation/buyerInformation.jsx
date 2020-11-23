import React, { useState, useRef } from 'react'
import style from './buyerInformation.module.css';
import DaumPostcode from "react-daum-postcode";
import { useHistory } from "react-router-dom";

export default function BuyerInformation({sum, products, cartId}) {  
    const [isAddress, setIsAddress] = useState('');
    const [isZoneCode, setIsZoneCode] = useState('');
    const [isPost, setIsPost] = useState(false);
    const nameInput = useRef();
    const telInput = useRef();
    const addrInput = useRef();
    const detailAddrInput = useRef();
    const postInput = useRef();
    const history = useHistory();
    
    const handlePostClick = () => {
        setIsPost(true);
    }

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
        if (data.bname !== "") {
            extraAddress += data.bname;
        }
        if (data.buildingName !== "") {
            extraAddress +=
            extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        setIsPost(false);
    };

    const handleInforClick = () => {

        var IMP = window.IMP; 
        IMP.init('imp07578568');

        IMP.request_pay({
            pg : 'inicis', 
            pay_method : 'card',
            merchant_uid : 'merchant_' + new Date().getTime(),
            name : '허니베이커리',
            amount : sum,
            buyer_name : nameInput.current.value,
            buyer_tel : telInput.current.value,
            buyer_addr : addrInput.current.value + ' ' + detailAddrInput.current.value,
            buyer_postcode : postInput.current.value,
            m_redirect_url : 'https://localhost:3000',
        }, async function (rsp) {
            if ( rsp.success ) {
            await fetch(`/checkout?imp_uid=${rsp.imp_uid}&&cartId=${cartId}`).then(res => res.json());
            history.push("/home");

            } else {
                alert('결제에 실패하였습니다.');
            }
        });

    }

    return (
        <div className={style.container}>
               <ul className={style.informationContainer}>
                   <li>이름: <input type="text" className={style.name} placeholder="구매자 이름" name="buyer_name" ref={nameInput} /> </li>
                   <li>전화번호: <input type="text" placeholder="구매자 전화번호" name="buyer_tel" ref={telInput} /></li>
                   <li>주소: <input type="text" className={style.addr} placeholder="구매자 주소" name="buyer_addr" ref={addrInput} value={isAddress} readOnly/></li>
                   <li>상세주소: <input type="text" placeholder="구매자 상세 주소" name="detail_addr" ref={detailAddrInput} /></li>
                   <li> 
                       <>우편번호
                       <input type="text" placeholder="구매자 우편 번호" name="buyer_postcode" value={isZoneCode} ref={postInput} readOnly/>
                       <button className={style.search} onClick={handlePostClick}>검색</button></>
                   </li>
                   {isPost ? (<li className={style.postContainer}><DaumPostcode className={style.postCodeStyle} onComplete={handleComplete} /></li>) : null}
               </ul>
               <div className={style.buyContainer}><button onClick={handleInforClick}>구매하기</button></div>
        </div>
    )
}
