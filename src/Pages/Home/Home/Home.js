import React from 'react';
import Header from '../../Shared/Header/Header';
import Hotdeals from '../HotDeals/Hotdeals';
import Promote from '../Promote/Promote';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Promote></Promote>
            <Hotdeals></Hotdeals>
        </div>
    );
};

export default Home;