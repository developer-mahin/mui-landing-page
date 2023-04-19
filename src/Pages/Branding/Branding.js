import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';


const BrandingWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "rgba(122, 178, 89, 0.15)",
    margin: "4rem 0rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)'
}))


const Branding = () => {
    return (
        <BrandingWrapper sx={{
            padding: {
                xs: "1rem",
                md: "3rem"
            },
            height: {
                xs: "90vh",
                sm: "50vh",
                md: "80vh"
            }
        }}>
            <Box>
                <Typography sx={{
                    fontSize: {
                        xs: "32px",
                        sm: "32px",
                        md: "52px"
                    },
                    fontWeight: "semibold"
                }}>Let's Grow Your Brand To The Next Level </Typography>
                <Typography variant='p' sx={{ mt: "1rem", display: "block" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eaque assumenda nemo tempora itaque atque quae sequi magni deleniti beatae quasi deserunt dolore pariatur, architecto blanditiis in, necessitatibus ad velit.
                </Typography>
                <Box sx={{ mt: "1rem" }}>
                    <Button sx={{
                        backgroundColor: "primary.main",
                        color: "#fff",
                        p: "8px 30px",
                        '&:hover': {
                            backgroundColor: "primary.main"
                        }
                    }}>Hire Us</Button>
                </Box>
            </Box>
            <Box sx={{
                width: "100%",
                display: {
                    xs: "none",
                    sm: "none",
                    md: "block"
                }
            }}>
                <img src="https://i.ibb.co/stpP50B/personal-branding-marketing-new-product-development-building-brand-removebg-preview.png" style={{ width: "100%" }} alt="" />
            </Box>
        </BrandingWrapper >
    );
};

export default Branding;