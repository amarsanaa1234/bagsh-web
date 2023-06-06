import React, { useEffect, useState } from 'react'
import {auth, provider} from '../../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Login({setIsAuth}) {
  // const history = useHistory();
const [getForm, setForm] = useState({email: '', password: ''});
const [getMsj, setMsj] = useState(false);

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
  //   const body = {
  //     email: "amarsanaa123@gmail.com",
  //     password: "123456",
  //     returnSecureToken: true
  // }
  if(getForm.email === '' || getForm.password === ''){
    setMsj("Емайл болон Нууц үгээ оруулна уу!");
  }else{
    const body = {
      email: getForm.email,
      password: parseInt(getForm.password),
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
                        <form className="contact-form"> 
                            <div className="form-grp">
                                <label htmlFor="email">Емайл хаяг <span>*</span></label>
                                <input type="email" id="email" placeholder="info.example@.com" onChange={(e)=> setForm({...getForm, email: e.target.value})} />
                            </div> 
                            <div className="form-grp">
                                <label htmlFor="name">Нууц үг <span>*</span></label>
                                <input type="password" id="name" placeholder="Нууц үгээ оруулна уу..." onChange={(e)=> setForm({...getForm, password: e.target.value})}/>
                            </div>  
                            <h5 class="sub-title" style={{color: "red"}}>{getMsj ? getMsj : ""}</h5> 
                        </form>
                        <button onClick={signBtn} className="btn">Нэвтрэх<img src="" alt=""/></button>
                    </div> 
                </div>
            </div>
        </div> 
</section>
  )
}

export default Login;
