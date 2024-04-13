import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import Card from './Card'

function cardContainer() {
  return (
    <Container sx=
    {{width: '80vw', 
    p: 5,
    backgroundColor: '#1B1D1F', 
    position: 'absolute', 
    zIndex: 10,        
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    }}>
      <Typography variant='myHeader'>
          Our Collection
      </Typography>
      <Typography variant='myParagraph' sx={{ mt: 1, maxWidth: '500px', margin: 'auto' }}>
         Introducing our Coffee Collection, a selection of unique coffees from 
         different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </Typography>
      <Box display='flex' gap='5px' margin='30px 0px'>
        <Button variant="contained" sx={{backgroundColor: '#6F757C', borderRadius: '10px', textTransform: 'none', p: '10px', pt: '5px', pb: '5px', color: '#FEF7EE', fontSize: '14px'}}>All Products</Button>
        <Button variant="text" sx={{textTransform: 'none', borderRadius: '10px'}}>Available Now</Button>
      </Box>
    <Card />
    </Container>
  )
}

export default cardContainer