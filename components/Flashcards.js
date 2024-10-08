'use client'

import {Typography, Container, Grid, Card, CardActionArea} from '@mui/material'

import {useUser} from '@clerk/nextjs'
import {useEffect, useState} from 'react'
import {collection, doc, getDoc, setDoc} from 'firebase/firestore'
import db from '@/firebase'
import {useRouter} from 'next/navigation'

export default function Flashcards() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState()

    const router = useRouter()

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                setFlashcards(collections)
                console.log('flashcards in FLASHCARDS: ', collections)
            }
            else {
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcards()
    }, [user])

    if (!isLoaded || !isSignedIn) {
        router.push('/')
    }

    if (!isSignedIn) {
        router.push('/sign-in')
    }

    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`)
    }

    return (
        <Container maxWidth="100vw">
            <Grid
                container
                spacing = {3}
                sx={{
                    mt:4,
                }}
            >
                {flashcards?.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardActionArea
                                onClick={() => handleCardClick(flashcard.name)}
                            >
                                <Typography variant='h6'>
                                    {flashcard.name}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
                {flashcards?.length === 0 && (
                    <Box>
                        <Typography>Create your first set of flashcards</Typography>
                        <Button variant='contained' href='/generate'> </Button>
                    </Box>
                )}
            </Grid>
        </Container>
    )
}