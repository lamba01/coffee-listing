import React from 'react'
import { Container } from '@mui/material'
import Card from './components/Card'

function cardContainer() {
  return (
    <Container sx={{width: '70vw', height: 'fit-content', m: 3, backgroundColor: '#6F757C', position: 'absolute', top: 2}}>
        <Card />
    </Container>
  )
}

export default cardContainer