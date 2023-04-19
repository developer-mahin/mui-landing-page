import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const FeedBack = () => {

    const array = [
        { id: "1" },
        { id: "2" },
        { id: "3" },
    ]


    return (
        <Box sx={{
            my: {
                xs: "3rem",
                md: "4rem"
            }
        }}>
            {/* Section title */}
            <SectionTitle title="Client" colored="Feedback" />

            {/* Feedback card */}
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                    lg: "1fr 1fr 1fr"
                },
                gap: "1.5rem",
                mt: {
                    xs: "1rem",
                    md: "2rem"
                }
            }}>

                {
                    array.map((ar, i) => <Box key={i} sx={{
                        p: "1rem",
                        border: "1px solid #ddd",
                        borderRadius: "10px"
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem"
                        }}>
                            <CardMedia
                                component="img"
                                image="https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg"
                                alt=""
                                sx={{
                                    borderRadius: "100%",
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "cover"
                                }}
                            />
                            <Box>
                                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Johney Depp</Typography>
                                <Typography variant='body2' sx={{ fontWeight: "semibold" }}>Lorem ipsum dolor sit.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: "1rem" }}>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eaque maiores cupiditate laboriosam facere sit nemo distinctio doloribus suscipit asperiores.</Typography>
                        </Box>
                    </Box>)
                }



            </Box>
        </Box>
    );
};

export default FeedBack;