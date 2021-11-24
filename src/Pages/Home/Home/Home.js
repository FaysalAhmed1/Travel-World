import React from 'react';

import Banner from '../Banner/Banner';

import Faq from '../Faq/Faq';
import Review from '../Review/Review';


import Services from '../Services/Services';


const Home = () => {
    return (
        <div className="mb-5">

            <Banner></Banner>
            <Services></Services>

            <Review>
            </Review>
            <Faq></Faq>
        </div>
    );
};

export default Home; <Services></Services>