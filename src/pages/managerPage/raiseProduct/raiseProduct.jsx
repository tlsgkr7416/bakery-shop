import React, { useState } from 'react'
import style from './raiseProduct.module.css';

export default function RaiseProduct() {
  const [preImg, setPreImg] = useState([]);
  const [radio, setRadio] = useState(null);

  const handleImgChange = (event) => {

      const files = event.target.files; 
      const array = [];

      for (var i = 0; i < files.length; i++) {
          const file = files[i];
          const picReader = new FileReader();
          picReader.addEventListener("load", function (e) {
              const picFile = e.target;
              array.push(picFile.result);
              setPreImg([...array]);
          });
          
          picReader.readAsDataURL(file);
          
      } 
  }

  const handleSaleChange = event => {
      setRadio(event.target.value);
  } 

    return (
        <main>
            <ul className={style.container}>
              <form action="/manager/product" method="POST" enctype="multipart/form-data">
                <li className={style.checkContainer}>
                  <div><input type='radio' value='할인상품' name='kind' onChange={handleSaleChange}/>할인상품</div>
                  <div><input type='radio' value='일반빵' name='kind' onChange={handleSaleChange}/>일반빵</div>
                  <div><input type='radio' value='크로와상' name='kind' onChange={handleSaleChange}/>크로와상</div>
                  <div><input type='radio' value='피자빵' name='kind' onChange={handleSaleChange}/>피자빵</div>
                  <div><input type='radio' value='롤케익' name='kind' onChange={handleSaleChange}/>롤케익</div>
                </li>
                <li className={style.product_name}>제품명 <input type="text" name="name" placeholder="제품명" /></li>
                <li className={style.product_price}>{radio === '할인상품' ? "원래가격" : "가격"} <input type="text" name="price" placeholder="가격"/></li>
                {radio === '할인상품' ? (
                <>
                  <li className={style.product_price}>세일가격 <input type="text" name="salePrice" placeholder="세일가격"/></li>
                  <li className={style.product_price}>세일기한 <input type="date" name="saleDate" /></li>
                  <li className={style.product_price}>세일시간 <input type="time" name="saleTime" /></li>
                </>
                ) : null}
                

                <li className={style.item}>
                  <label for="ex_file">사진 올리기</label>
                  <input type="file" id="ex_file" name="picture" onChange={handleImgChange} multiple />
                </li>
                <li className={style.imgContainer}>
                  {preImg.map((item, index) => <img key={index} src={item} />)}
                </li>
                <li className={style.product_content}>내용 <textarea name="content"/></li>
                <li><input type="submit" /></li> 
              </form>
            </ul>

        </main>
    )
}
