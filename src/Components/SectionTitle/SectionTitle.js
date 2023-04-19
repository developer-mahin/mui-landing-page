import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ title, colored }) => {
    return (
        <Box>
            <Typography sx={{
                fontSize: "34px",
                fontWeight: "bold",
                textAlign: "center"
            }}>
                {title} {" "}
                <span style={{
                    color: "#7AB259"
                }}>{colored}</span>
            </Typography>

        </Box>
    );
};

export default SectionTitle;