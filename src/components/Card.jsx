import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, CardActionArea, Typography, Grid } from '@mui/material'

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
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant='h6'>
                  {item.name}
                </Typography>
                <Typography>
                  {item.price}
                </Typography>
                <Typography>
                  {item.rating != null ? `${item.rating} (${item.votes} votes)` : "no rating"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Cards