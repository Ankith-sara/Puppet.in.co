import React from 'react';
import Hero from '../components/Hero';
import LastestCollection from '../components/LastestCollection';
import BestSeller from '../components/BestSeller';
import Collections from '../components/Collections';

const Index = () => {
    return (
        <div>
            <Hero />
            <Collections />
            <LastestCollection />
            <BestSeller />
        </div>
    )
}

export default Index;