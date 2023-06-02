import React, { useEffect, useState } from 'react'
import {auth, provider} from '../../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Login({setIsAuth}) {
  
const [getForm, setForm] = useState({email: '', password: ''});

  useEffect(()=>{
    signBtn();
  },[])

    let navigate = useNavigate();

    // const signWithGoogle = () => {
    //     signInWithPopup(auth, provider)
    //     .then((result)=>{
    //         localStorage.setItem('isAuth', true);
    //         setIsAuth(true);
    //         navigate('/Home');
    //     })
    // }

  const signBtn = () => {
    const body = {
      email: "amarsanaa123@gmail.com",
      password: "123456",
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
  }).catch((err)=>{
    if(err.response.data.error.message === "EMAIL_NOT_FOUND"){
      alert("Имэйл олдсонгүй!");
  }else if(err.response.data.error.message === "INVALID_PASSWORD"){
    alert("Нууц үг буруу байна!");
  }
  })
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
    <div className='loginPage'>
      <p>Sign in with Google to continue</p>
      <div>
        <input  placeholder='mail' />
        <input  placeholder='password' />
      </div>
      <button className='login-with-google-btn' onClick={signBtn}>Sign in</button>
      {/* <button className='login-with-google-btn' onClick={()=>signWithGoogle()}>Sign in with google</button> */}
    </div>
  )
}

export default Login;
