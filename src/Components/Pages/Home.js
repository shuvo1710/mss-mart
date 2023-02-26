import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import BestSale from '../BestSale/BestSale';
import Bloge from '../Bloge/Bloge';
import Card from '../Card/Card';
import Discount from '../Discount/Discount';
import Gallery from '../Gallery/Gallery';
import GottaHaveIt from '../NewArraivale/GottaHaveIt';
import NewsLetter from '../NewsLetter/NewsLetter';
import PayementMethod from '../PayementMethod/PayementMethod';
import PurchaseModal from '../PurchaseModal/PurchaseModal';




const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <Valentine/> */}
            <Card/>
            <GottaHaveIt/>
            <Gallery/>
            <BestSale/>
            <Discount/>
            <PayementMethod/>
            <PurchaseModal/>
            <Bloge/>
            
            <NewsLetter/>
            
        </div>
    );
};

export default Home;