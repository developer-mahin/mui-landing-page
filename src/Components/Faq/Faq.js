import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const CustomExpandIcons = () => {
    return (
        <div>
            <div className='expandIcon'>
                <AddIcon />
            </div>
            <div className='removeIcon'>
                <RemoveIcon />
            </div>
        </div>
    )
}


const faqItems = [
    { item: "Accordion 1" },
    { item: "Accordion 2" },
    { item: "Accordion 3" },
    { item: "Accordion 4" }
]


const Faq = () => {

    return (
        <Box sx={{
            marginBottom: {
                xs: "2rem",
                md: "4rem"
            }
        }}>

            <Box sx={{
                marginBottom: {
                    xs: "1rem",
                    md: "2rem"
                }
            }}>
                <SectionTitle title="Frequently Asked " colored="Questions" />
            </Box>

            <div>
                {
                    faqItems.map((item, i) => <Accordion key={i} sx={{
                        boxShadow: "none",
                        border: "1px solid #ddd",
                        borderBOttom: "none",
                        borderRadius: "10px",
                        my: "10px",
                        '& .Mui-expanded': {
                            '& .expandIcon': {
                                display: "none"
                            },
                            '& .removeIcon': {
                                display: "block",
                                '& svg': {
                                    color: "primary.green"
                                }
                            },

                        },


                    }}>
                        <AccordionSummary
                            expandIcon={<CustomExpandIcons />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                '& .removeIcon': {
                                    display: "none"
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "primary.green",
                                    fontWeight: "bold",
                                    fontSize: {
                                        xs: "16px",
                                        md: "22px"
                                    }
                                }}
                            >
                                {item.item}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{
                                color: "#767676",
                                fontWeight: "600",
                                fontSize: {
                                    xs: "12px", 
                                    md: "16px"
                                }
                            }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quae iste accusamus neque impedit laboriosam, laborum aliquid voluptas perferendis ipsum nihil quos, eligendi earum nam nisi dolorem doloremque veritatis placeat accusantium repellat. Qui magni error amet accusamus ex voluptatibus ab.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>)
                }

            </div>

        </Box>
    );
};

export default Faq;