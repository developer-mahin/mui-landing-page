import React from 'react';
import Branding from './Branding/Branding';
import { Box } from '@mui/material';
import Brands from '../Components/Brands/Brands';
import Services from '../Components/Services/Services';
import OurWorks from '../Components/OurWorks/OurWorks';
import FeedBack from '../Components/FeedBack/FeedBack';
import Faq from '../Components/Faq/Faq';


const Home = () => {
    return (
        <Box>
            <Branding />
            <Brands/>
            <Services/>
            <OurWorks/>
            <FeedBack/>
            <Faq/>
        </Box>
    );
};

export default Home;