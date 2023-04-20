import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            py: "1rem",
            borderTop: "2px solid #ddd",
            width: "100%"
        }}>
            <Typography sx={{
                fontSize: {
                    xs: "13px",
                    md: "16px"
                },
                textAlign: "center"
            }}>
                &copy; Creative agency all right reserved
            </Typography>
        </Box>
    );
};

export default Footer;