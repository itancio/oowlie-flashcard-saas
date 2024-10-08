'use client'
import { 
    AppBar,
    Box,
    Button,
    CardActionArea,
    CardContent,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Paper,
    TextField,
    Toolbar,
    Typography,

    createTheme,
    useMediaQuery,
} from "@mui/material"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Image from "next/image";
import {SignedOut, SignedIn, UserButton, ClerkProvider} from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import Link from 'next/link'

 
export const Hero = () => {

    return (
        // <Container
        //     sx ={{
        //         position: 'absolute',
        //         left: 0,
        //         right: 0,
        //         top: 80,
        //         bottom: 0,
        //         backgroundImage: 'url(/images/hero1.png)',
        //         transition: 'filter 0.3s ease-in-out',
        //         backgroundSize: 'contain',
        //         backgroundRepeat: 'no-repeat',
        //         maxWidth: '900px',
        //         zIndex: -1,
        //     }}

        // >



        // </Container>


        <Grid container 
            display='flex' 
            alignItems='center' 
            justifyContent='center'
            sx={{mt: 10, mb: 30}}
        >
            <Grid item 
                alignItems='center' 
                sx={{
                    textAlign: 'center', 
                    mx: 3,
                }}>
                <Typography color='primary' variant="h1">
                    Easy learning
                </Typography>
                <Typography variant="h2" gutterBottom>
                    with AI-powered flashcards
                </Typography>

                <Typography  >
                    For quick, and effective studying.
                </Typography>
                <Typography >
                One flashcard at a time
                </Typography>

                <Button
                    href='/generate'
                    variant='contained'
                    endIcon={<ArrowCircleRightIcon/>}
                    sx={{my: 4}}
                >
                Get started        
                </Button>
            </Grid>
            <Grid item
                spacing={12}
                component='img'
                sx={{
                    height: 250,
                    // minHeight: 100,
                    borderRadius: 8,
                    mx: 3,
                }}
                src='/images/hero1.png'
            >
            </Grid>
        </Grid>
    )
}

export default Hero;