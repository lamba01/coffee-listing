import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import BgdVector from '../assets/vector.svg';
import Card from './Card'

function CardContainer() {
  const [allProductsActive, setAllProductsActive] = useState(true); // State to track active state of "All Products" button
  const [availableProductsActive, setAvailableProductsActive] = useState(false); // State to track active state of "Available Now" button

  const handleAllProductsClick = () => {
    setAllProductsActive(true);
    setAvailableProductsActive(false);
  };

  const handleAvailableProductsClick = () => {
    setAllProductsActive(false);
    setAvailableProductsActive(true);
  };

  return (
    <Container
      sx={{
        width: '85vw',
        height: 'fit-content',
        pt: 10,
        pb: 10,
        mt: -20,
        backgroundColor: '#1B1D1F',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundImage: `url(${BgdVector})`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(50% + 100px) top',
      }}
    >
      <Typography variant='myHeader'>
        Our Collection
      </Typography>
      <Typography variant='myParagraph' sx={{ mt: 1, maxWidth: '500px', margin: 'auto' }}>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </Typography>
      <Box display='flex' gap='5px' margin='30px 0px'>
        <Button
          variant="contained"
          onClick={handleAllProductsClick}
          sx={{
            background: 'none',
            borderRadius: '10px',
            textTransform: 'none',
            p: '10px',
            pt: '5px',
            pb: '5px',
            color: '#FEF7EE',
            fontSize: '14px',
            ...(allProductsActive && { backgroundColor: '#6F757C' }), // Apply active styles if allProductsActive is true
          }}
        >
          All Products
        </Button>
        <Button
          variant="text"
          onClick={handleAvailableProductsClick}
          sx={{
            textTransform: 'none',
            borderRadius: '10px',
            ...(availableProductsActive && { backgroundColor: '#6F757C' }), // Apply active styles if availableProductsActive is true
          }}
        >
          Available Now
        </Button>
      </Box>
      <Card allProducts={allProductsActive} />
    </Container>
  );
}

export default CardContainer;
