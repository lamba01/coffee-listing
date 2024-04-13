import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, CardActionArea, Typography, Grid, Box } from '@mui/material'
import StarFill from '../assets/Star_fill.svg'
import Star from '../assets/Star.svg'

function Cards({ allProducts }) {
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
    const filteredData = allProducts ? data : data.filter(item => item.available);
  return (
    <Grid container spacing='30px' justifyContent="center" alignItems='center' width='85%'>
      {filteredData.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card sx={{background: 'none', boxShadow: 'none', p: '0px'}}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='160'
                image={item.image}
                alt={item.name}
                sx={{borderRadius: '10px', position: 'relative'}}
              />
            {item.popular && (
               <Typography sx={{ color: '#111315', position: 'absolute', top: 10, left: 10, backgroundColor: '#F6C768', padding: '4px 10px', fontWeight: '600', fontSize: '0.625rem', borderRadius: '15px' }}>
                   Popular
              </Typography>
            )}
              <CardContent sx={{p: 0, mt: 2}}>
                <Box display='flex' alignItems='flex-start' flexDirection='column'>
                    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                    <Typography variant='mycard'>
                       {item.name}
                    </Typography>
                    <Typography variant='mycardPrice'>
                       {item.price}
                    </Typography>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' >
                    <Typography variant='mycard' sx={{mt: 1}}>
                    {item.rating != null ? (
                        <Box display='flex' alignItems='center'>
                         <img src={StarFill} alt="Filled Star" />
                         {item.rating} (<span style={{ color: '#6F757C' }}>{item.votes} votes</span>) 
                        </Box>
                         ) : (
                            <Box display='flex' alignItems='center'>
                            <img src={Star} alt="Empty Star"/>
                             <span style={{color: '#6F757C'}}>No ratings</span>                         
                            </Box>  
                        )}
                    </Typography>
                    <Typography variant='mycard' sx={{color: '#ED735D'}}>
                        {item.available === false ? "Sold-out" : " "}
                    </Typography>
                    </Box>           
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


