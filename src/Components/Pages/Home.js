import React from 'react';
import Banner from '../Banner/Banner';
import BestSale from '../BestSale/BestSale';
import Card from '../Card/Card';
import Gallery from '../Gallery/Gallery';
import NewsLetter from '../NewsLetter/NewsLetter';
import PayementMethod from '../PayementMethod/PayementMethod';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Card/>
            <Gallery/>
            <BestSale/>



            <PayementMethod/>
            <NewsLetter/>
        </div>
    );
};

export default Home;