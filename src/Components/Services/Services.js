import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import styled from '@emotion/styled';



const ServicesWrapper = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
    gap: "24px",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        marginTop: "1rem",
    }
}))


const Services = () => {

    const servicesItems = [
        { title: "Web & Mobile Desgin", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolorem? Voluptatem at nostrum eaque adipisci, excepturi eum deleniti molestiae sit.", image: "https://i.ibb.co/k5RMk28/Animated-mobile-phone-clip-art-2.jpg" },

        { title: "Graphic Design", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolorem? Voluptatem at nostrum eaque adipisci, excepturi eum deleniti molestiae sit.", image: "https://i.ibb.co/1qz2KBg/png-transparent-cartoon-graphic-designer-animation-graphic-design-web-design-photography-logo.png" },

        { title: "Web Development", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolorem? Voluptatem at nostrum eaque adipisci, excepturi eum deleniti molestiae sit.", image: "https://i.ibb.co/v33c9PX/download-3.png" }
    ]







    return (
        <Box sx={{
            margin: {
                xs: "1rem 0rem",
                md: "4rem 0rem"
            }
        }}>
            <SectionTitle title="Provide Awesome" colored="Services" />


            <ServicesWrapper>

                {
                    servicesItems.map((item, i) => <Box key={i} sx={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 10px -2px #ddd",
                        padding: "1.5rem 1rem",
                        "&:hover": {
                            boxShadow: "0px 0px 20px 2px #ddd",
                            transition: "all .5s", 
                            cursor: "pointer"
                        }
                    }}>

                        <Stack spacing={1} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <Box component="img" alt='' src={item.image} sx={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "100%",
                                objectFit: "cover", 
                                border: "1px solid #ddd", 
                                p: "0.5rem"
                            }}></Box>
                            <Typography variant='h6' sx={{fontWeight: "bold"}}>{item.title}</Typography>
                            <Typography variant='p' sx={{ textAlign: "center" , fontWeight: "semibold" }}>{item.details}</Typography>

                        </Stack>
                    </Box>)
                }
            </ServicesWrapper>

        </Box>
    );
};

export default Services;