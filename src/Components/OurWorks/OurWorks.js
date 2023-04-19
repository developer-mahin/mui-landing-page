import { Box, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreativeCard from '../CreativeCard/CreativeCard';
import { data } from './data';



const OurWorks = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            margin: {
                xs: "3rem 0rem",
                md: "4rem 0rem"
            }
        }}>
            {/* Heading */}

            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                '@media(max-width: 780px)': {
                    display: "block"
                }
            }}>
                <SectionTitle
                    title="Here are some of"
                    colored="our works"
                    sx={{
                        textAlign: "left"
                    }}
                />
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    '@media(max-width: 780px)': {
                        display: "inline"
                    }
                }}>
                    <Tabs value={value} onChange={handleChange} centered sx={{
                        '& .MuiTabs-indicator': {
                            display: "none"
                        },
                        '& .css-jopd5f-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                            color: "primary.green"
                        }
                    }}>
                        <Tab sx={{
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            padding: {
                                xs: "8px",
                                md: "10px"
                            }
                        }} label="All" />
                        <Tab sx={{
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            padding: {
                                xs: "8px",
                                md: "10px"
                            }
                        }} label="Web Design" />
                        <Tab sx={{
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            padding: {
                                xs: "8px",
                                md: "10px"
                            }
                        }} label="Mobile app" />
                    </Tabs>
                    <Box sx={{
                        textAlign: {
                            xs: "center",
                            md: "end"
                        }
                    }}>
                        <IconButton sx={{
                            border: "1px solid #ddd",
                            mr: "0.5rem"
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value < 1}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton sx={{
                            border: "1px solid #ddd",
                        }}
                            onClick={() => setValue(value + 1)}
                            disabled={value > 1}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* card */}
            <Box sx={{
                margin: {
                    xs: "1rem 0rem",
                    md: "2rem 0rem"
                }
            }}>
                <Grid container spacing={3} justifyContent="center">
                    {
                        data[value].map((image, i) => <Grid key={i} item>
                            <CreativeCard image={image} />
                        </Grid>)
                    }
                </Grid>


            </Box>
        </Box >
    );
};

export default OurWorks;