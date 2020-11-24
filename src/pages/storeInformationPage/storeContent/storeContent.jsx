import React from 'react'
import style from './storeContent.module.css'

export default function StoreContent() {
    return (
        <div className={style.container}>
            <h3 className={style.titleContainer}>
                엄격한 품질관리와 세계 각국에서 익힌 기술을 한국에 맞게 토착화 시키며,
                엄선된 재료만을 사용하여 쌓아온 최고의 기술력을 바탕으로 한 김영모과자점은
                맛을 소중히, 사람을 소중히 한다는 슬로건 아래 2014년부터 착한 과자와 빵을 만들고 있습니다.
            </h3>
            <div className={style.topContainer}>
                <img src='../../../images/products-1606129543683.jpeg'/>
                <div className={style.content}>
                한 끼의 먹을거리가 절실했던 시절,
                달콤하고 부드러운 빵에 매료된 소년은 다짐합니다.
                세상에서 가장 맛있는 빵을 만들겠다고, 그래서 사람들에게
                온기 가득한 빵의 진심을 전해주겠다고, 그 후로 피나는 노력과 열정으로
                허니베이커리는 1982년 자신의 이름을 건 과자점을 세상에 선보입니다.
                허니베이커리는 1%의 오차도 허락하지 않는 완벽에 가까운 빵을 만들며,
                소중하고 착한 사람들과 함께 나눌 수 있는 과자점을 만들겠다는 신념으로
                지금껏 점진적으로 성장해 오고 있습니다.
                </div>
            </div>
        </div>
    )
}
