import React, { useEffect, useState } from 'react'
import {auth, provider} from '../../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"

function Login({setIsAuth}) {
  // const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [getMsj, setMsj] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault()

      setEmailError(false)
      setPasswordError(false)

      if (email == '') {
          setEmailError(true)
      }
      if (password == '') {
          setPasswordError(true)
      }

      if(email === '' || password === ''){
        setMsj("Емайл болон Нууц үгээ оруулна уу!");
      }else{
        const body = {
          email: email,
          password: password,
          returnSecureToken: true
      }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5imCU3exp60hRt9YvLCFHBe_Ly0BD8JI", body).then((res)=>{
          console.log("res: ", res.data);
          const expIn =  res.data.expiresIn;
          const expireDate = new Date(new Date().getTime() + parseInt(expIn) * 1000); 
          localStorage.setItem("idToken",  res.data.idToken)
          localStorage.setItem("localId",  res.data.localId) 
          localStorage.setItem("expireDate", expireDate)
          localStorage.setItem("refreshToken",  res.data.refreshToken) 
          navigate('/Home');
          refreshToken(expIn * 1000)
          setIsAuth(true);
        }).catch((err)=>{
          if(err.response.data.error.message === "EMAIL_NOT_FOUND"){
            alert("Имэйл олдсонгүй!");
        }else if(err.response.data.error.message === "INVALID_PASSWORD"){
          alert("Нууц үг буруу байна!");
        }
        })
      }
  }
  const signBtn = () => {
  //   const body = {
  //     email: "amarsanaa123@gmail.com",
  //     password: "123456",
  //     returnSecureToken: true
  // }
  
}

const refreshToken = async(expIn) =>{ 
  await setTimeout(()=>{  
      localStorage.removeItem("localId");
      localStorage.removeItem("idToken");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expireDate");
      document.location.replace("/");
      // history.push("/");
  },expIn)
}


  return (
    <section className="adoption-shop-area">
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-5 col-md-8">
                    <div className="contact-wrap-content"> 
                        <form  autoComplete="off" onSubmit={handleSubmit} style={{backgroundColor:'white', padding: 30, borderRadius: 20,}}> 
                            <h2>Login Form</h2>
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
                                label="Password"
                                onChange={e => setPassword(e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="password"
                                value={password}
                                error={passwordError}
                                fullWidth
                                sx={{mb: 3}}
                              />
                                {/* <label htmlFor="email">Емайл хаяг <span>*</span></label>
                                <input type="email" id="email" placeholder="info.example@.com" onChange={(e)=> setForm({...getForm, email: e.target.value})} /> */}
                                <Button variant="outlined" color="secondary" type="submit">Нэвтрэх</Button>
                            {/* <div className="form-grp">
                                <label htmlFor="name">Нууц үг <span>*</span></label>
                                <input type="password" id="name" placeholder="Нууц үгээ оруулна уу..." onChange={(e)=> setForm({...getForm, password: e.target.value})}/>
                            </div>   */}
                        </form>
                        {/* <button onClick={signBtn} className="btn">Нэвтрэх<img src="" alt=""/></button> */}
                    </div> 
                </div>
            </div>
        </div> 
</section>
  )
}

export default Login;
