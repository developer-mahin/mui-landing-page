import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React from 'react'


const BrandsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    '& > img': {
        height: "70px"
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column", 
        "& > img" : {
            marginBottom: "1rem"
        }
    }
}))

const Brands = () => {

    const brands = [
        "https://i.ibb.co/LYLy6Qs/png-transparent-logo-slack-trademark-brand-product-design-logo-of-google-text-trademark-logo-removeb.png",
        "https://i.ibb.co/w6hmt9h/google-logo-black-transparent-removebg-preview.png",
        "https://i.ibb.co/64tt5Jr/download-removebg-preview.png",
        "https://i.ibb.co/SRSZQyq/download-1-removebg-preview.png",
        "https://i.ibb.co/FBNBVxb/download-2-removebg-preview.png"
    ]

    return (
        <BrandsWrapper>

            {
                brands.map((brand, i) => <img key={i} src={brand} alt="" />)
            }

        </BrandsWrapper>
    )
}


export default Brands;