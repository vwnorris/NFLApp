import * as React from "react"
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'

const RookieCard = ({ rookie, id=-1}) => {
    return (
        <Card sx={{ display: 'flex', marginBottom: 2 , padding: 2, bgcolor: '#e5e5e5' }}>
            <Grid container alignItems="center">
                <Grid item xs={4} container direction="column" alignItems="center">
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={rookie.pictureURL}
                        alt={rookie.name}
                    />
                    {id != -1 ? <Typography variant="h4" color="primary" component="div" fontStyle="italic" fontWeight="bold">
                        {id}
                    </Typography>:<></>}
                    
                </Grid>
                <Grid item xs={4}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {rookie.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" fontStyle="italic">
                            {rookie.position}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" fontStyle="italic">
                            {rookie.collegeTeam}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={4} container justifyContent="center">
                    <CardContent>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {rookie.team}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default RookieCard
