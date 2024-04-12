import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, CardActionArea, Typography, Grid, Box } from '@mui/material'

function Cards() {
    const [data, setdata] = useState([])

    useEffect(() => {
        const Api_Url= 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        axios.get(Api_Url)
        .then((response) => {
            console.log(response.data)
            setdata(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card sx={{background: 'none', boxShadow: 'none', p: '0px'}}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='150'
                image={item.image}
                alt={item.name}
                sx={{borderRadius: '10px'}}
              />
              <CardContent sx={{p: 0, mt: 2}}>
                <Box display='flex' alignItems='flex-start' flexDirection='column'>
                    <Box display='flex' justifyContent='space-between' width='100%'>
                    <Typography variant='mycard'>
                       {item.name}
                    </Typography>
                    <Typography variant='mycardPrice'>
                       {item.price}
                    </Typography>
                    </Box>
                    <Typography variant='mycard' sx={{mt: 1}}>
                       {item.rating != null ? `${item.rating} (${item.votes} votes)` : "no rating"}
                    </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Cards