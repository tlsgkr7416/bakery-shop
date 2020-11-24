import React from 'react'
import style from './storeInformation.module.css';
import Header from 'components/header/header';
import StoreMap from '../storeMap/storeMap';
import StoreContent from '../storeContent/storeContent';
import Footer from 'components/footer/footer';

export default function StoreInformation() {
    return (
        <React.Fragment>
            <Header />
            <main className={style.container}>
                <h1>BRAND STORY</h1>
                <StoreContent />
                <StoreMap />
            </main>
            <Footer />
        </React.Fragment>    
    )
}
