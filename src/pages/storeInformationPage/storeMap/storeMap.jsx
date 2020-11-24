import React, { useEffect } from 'react'
import style from './storeMap.module.css';

export default function StoreMap() {

    const { kakao } = window;
    
    useEffect(() => {
        const container = document.getElementById('Mymap');
		const options = {
			center: new kakao.maps.LatLng(37.50731358258853, 126.78077951311175),
			level: 5
		};
        const map = new kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(
            37.50731358258853,
            126.78077951311175
          );
      
          let marker = new kakao.maps.Marker({
            position: markerPosition,
          });
      
          marker.setMap(map);
    }, []);
    
    return (
        <>
            <h2 className={style.place}>위치</h2>
            <div className={style.container} id="Mymap" >
              지도넣기
            </div> 
        </>
    )
}
