import React, {useState} from 'react'
import Time from './../tools/Time';
import '../../App.css';
import {db} from '../../firebase-config';
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Contact() {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [emailError, setEmailError] = useState(false)

    const userCollectionRef = collection(db, "contactData");
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault()
 
        setEmailError(false)
 
        if (email == '') {
            setEmailError(true)
        }

      await addDoc(userCollectionRef,{
        name,
        email,
        text,
      }).then(()=>{
        navigate("/");
      }).catch((err)=>{
        console.error('err',err);
      });
    }
 


  return (
    <div className='flex_box client'>
      <div className='flex_title'>
        <h1>Холбоо барих</h1>
      </div>
      <div className='contact'>
        <h1>Anderson Mobile Veterinary Care</h1>
        <p>5550 Morehouse Dr.</p>
        <p>San Diego, CA 92121</p>
        <p>Phone: 800-462-8749</p>
        {/* <div> */}
        <form autoComplete="off" onSubmit={handleSubmit} style={{backgroundColor:'white', padding: 30, borderRadius: 20,}}>
            <h2>Login Form</h2>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                <TextField 
                    label="Email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <TextField
                    id="outlined-multiline-static"
                    label="Text Area"
                    multiline
                    sx={{mb: 3}}
                    fullWidth
                    onChange={(event) => {
                      setText(event.target.value);
                    }}
                  />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
        </form>
      </div>
      <Time/>
    </div>
  )
}

export default Contact
