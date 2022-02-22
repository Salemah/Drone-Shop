import { Divider } from '@mui/material';
import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banne/Banner';
import Hotdeals from '../HotDeals/Hotdeals';
import Promote from '../Promote/Promote';
import Services from '../Service/Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Promote></Promote>
            <Services></Services>
            <Divider></Divider>
            <Hotdeals></Hotdeals>
        </div>
    );
};

export default Home;