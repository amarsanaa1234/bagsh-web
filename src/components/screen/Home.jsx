import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from '../../image/background1.jpg';
import image from '../../image/backgound11.webp';
import '../../App.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Teams from '../tools/Teams';
import Time from '../tools/Time';



function Home() {
  

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const styles = {
    paperContainer: {
        
        backgroundImage: `url(${Image})`,
        backgroundrepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    text:{
      fontSize: '1.5rem',
      lineheight: '2rem',
      color: 'white',
    },
    title: {
      color: '#EEE0CB',
      fontWeight: 'bold',
    }
};

  return (
    <div>
    <div style={styles.paperContainer}>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{flexWrap: 'inherit', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}
            >
            <Grid item xs={8} style={{marginTop: '200px'}}>
              <p style={styles.text}>Туршлагатай явуулын мал эмнэлгийн мэргэжилтнүүд</p>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3" gutterBottom style={styles.title}>
                Бид бүх тэжээвэр амьтдад аялах хэрэгтэй
              </Typography>
            </Grid>
            <Grid item xs={6} style={{marginTop: '100px'}}>
              <Button variant="contained">Уулзалтын хуваарь</Button>
            </Grid>
          </Grid>
        </Box>
        <Grid sx={{ flexGrow: 4 }} container spacing={8}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-around" flexWrap={'wrap'} gap={'20px'} spacing={8} style={{width: '100%', marginLeft: '0px'}}>
              <Card sx={{ maxWidth: 350, minWidth: 275}}>
                <CardContent>
                  <LocalPhoneIcon fontSize="large"/>
                  <Typography variant="h6" component="div">
                    Бидний тухай
                  </Typography>
                  <Typography variant="body2">
                    Өнөөдөр бидэн рүү залгах эсвэл имэйл илгээх!
                    <br />
                    {'"Манай ажилтнууд аль болох хурдан хариу өгөх болно."'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Contact Us</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 350, minWidth: 275}}>
                <CardContent>
                  <InsertDriveFileIcon fontSize="large"/>
                  <Typography variant="h6" component="div">
                    Бидний тухай
                  </Typography>
                  <Typography variant="body2">
                    Өнөөдөр бидэн рүү залгах эсвэл имэйл илгээх!
                    <br />
                    {'"Манай ажилтнууд аль болох хурдан хариу өгөх болно."'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Forms</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 350, minWidth: 275}}>
                <CardContent>
                  <CalendarMonthIcon fontSize="large"/>
                  <Typography variant="h6" component="div">
                  Book Appointment
                  </Typography>
                  <Typography variant="body2">
                  Одоо манай оффис дээр цаг товло.
                    <br />
                    {'"Бид тантай уулзахыг тэсэн ядан хүлээж байна!"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Schedule Now</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
    </div>
    <div className='homeInfo'>
      <div className='infoImage'>
      </div>
      <div className='infoText'>
        <Typography gutterBottom style={styles.text} style={{marginTop: '100px'}}>
          Андерсон Мобайл Мал эмнэлгийн үйлчилгээнд тавтай морил
        </Typography>
        <Typography variant="h4" gutterBottom style={styles.title}>
          Сан Диего дахь таны малын эмч
        </Typography>
        <Button variant="contained" color="success" style={{marginTop: '100px'}}>
          Request Info
        </Button>
      </div>
    </div>
    <Teams/>
    <Time/>
  </div>
  )
}

export default Home
