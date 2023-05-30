import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid} from '@mui/material';
import userImage from '../../image/user.jpg';

function Teams() {
  return (
    <div>
        <div>
            <Typography gutterBottom variant='h5' style={{marginTop: '100px'}}>
                Our Staff
            </Typography>
            <Typography gutterBottom variant="h3" style={{marginTop: '30px'}}>
                Working to Keep Pets Happy and Healthy Together
            </Typography>
        </div>
        <Grid container style={{margin: 'auto 50px auto 0px', width: '100%'}} spacing={{ xs: 1, sm: 3, md: 8 }} columns={{ xs: 2, sm: 8, md: 16 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image={userImage}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bianna Morris
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Veterinary Assistant
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image={userImage}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Sara Anderson
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Appointments
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image={userImage}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Dr. Nathan Anderson
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Doctor/ Owner
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image={userImage}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Corey Winters
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Technician
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
        </Grid>
    </div>
  )
}

export default Teams
