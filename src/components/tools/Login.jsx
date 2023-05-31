import React from 'react'
import {auth, provider} from '../../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

function Login({setIsAuth}) {

    let navigate = useNavigate();

    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/Home');
        })
    }

  return (
    <div className='loginPage'>
      <p>Sign in with Google to continue</p>
      <button className='login-with-google-btn' onClick={()=>signWithGoogle()}>Sign in with google</button>
    </div>
  )
}

export default Login
