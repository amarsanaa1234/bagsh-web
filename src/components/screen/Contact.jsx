import React, {useState} from 'react'
import Time from './../tools/Time';
import { Box, Button, Stack, TextField } from '@mui/material';

function Contact() {
  
  const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [multiline, setMultiline] = useState('')
    const [number, setNumber] = useState()
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, email, setMultiline, number) 
    }


  return (
    <div className='flex_box'>
      <div className='flex_title'>
        <h1>Холбоо барих</h1>
      </div>
      <div className='contact'>
        <h1>Anderson Mobile Veterinary Care</h1>
        <p>5550 Morehouse Dr.</p>
        <p>San Diego, CA 92121</p>
        <p>Phone: 800-462-8749</p>
        <div>
        <h2>Register Form</h2>
            <form onSubmit={handleSubmit} >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Number"
                    onChange={e => setNumber(e.target.value)}
                    value={number}
                    fullWidth
                    required
                    
                  />
                <TextField
                    label="Multiline"
                    multiline
                    fullWidth
                    variant='outlined'
                    minRows={3}
                    color='secondary'
                    defaultValue=" "
                    onChange={e => setMultiline(e.target.value)}
                    style={{margin: '40px 0px 40px 0px'}}
                  />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
        </div>
      </div>
      <Time/>
    </div>
  )
}

export default Contact
