import React from 'react'
import './App.css';
import { Typography, Card, CardContent,  } from '@mui/material';
import { Button, Grid, TextField, } from '@material-ui/core';


function App() {
  return (
    <div className='App'>
    <Typography gutterBottom variant="h3" align='center'>React-App</Typography>
    <Card style={{maxWidth:450, margin:"0 auto", padding:"60px 5px"}}>
      <CardContent>
      <Typography gutterBottom variant="h5" align='left'>Contact US</Typography>
      <Typography gutterBottom variant="body2" component="p">Fill the form and the team wil get back soon within 24 hours</Typography>

        <form>
        <Grid container spacing={1} >
          <Grid xs={12} sm={6} Item>
            <TextField  label="First Name" placeholder='enter the First Name' variant='outlined' fullWidth />
          </Grid>
          <Grid xs={12} sm={6} Item>
            <TextField label="Last Name" placeholder='enter the Last Name' variant='outlined' fullWidth/>
          </Grid>
          <Grid xs={12} Item>
            <TextField label="Email" placeholder='enter the Email Address' variant='outlined' fullWidth/>
          </Grid>
          <Grid xs={12} Item>
            <TextField label="Mobile Number" placeholder='enter the Mobile Number' variant='outlined' fullWidth/>
          </Grid>
          <Grid xs={12} Item>
            <TextField label="Address" multiline rows={4} placeholder='enter the  Address' variant='outlined'fullWidth/>
          </Grid>
          <Button variant="contained" color="primary" fullWidth>Submit</Button>
        </Grid>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default App