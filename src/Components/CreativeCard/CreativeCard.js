import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CreativeCard = ({ image }) => {
    return (
        <Card sx={{
            maxWidth: {
                xs: "100%",
                md: "350px",
            },
            p: "1rem",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "none"
        }}>
            <CardActionArea sx={{
                '&:hover': {
                    backgroundColor: "transparent"
                }
            }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt=""
                    style={{
                        borderRadius: "10px"
                    }}
                />
                <CardContent sx={{
                    p: "0px",
                    pt: "1rem"
                }}>
                    <Typography gutterBottom variant="h6" sx={{
                        fontWeight: "bold",
                        color: "#525252"
                    }} component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CreativeCard;