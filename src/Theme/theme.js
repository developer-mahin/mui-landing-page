import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
            yellow: "#FBD062",
            green: "#7AB259"
        }
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg"
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                fontSize: "1rem",
                padding: "0.6rem 2.5rem"
            }
        },
        defaultProps: {
            variant: "contained", 
            color: "primary"
        }
    },
})

export default theme