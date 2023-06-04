import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import "./footerStyle.css";
import Image from '../../image/logo.png';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import {signOut} from 'firebase/auth';

import {auth} from '../../firebase-config';


function Footer ({isAuth, setIsAuth}) {

    const signUserOut = () => {
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname="/login";
        })
    }

  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <div
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em"
            }}
          >
            <img src={Image} alt="" width={'50%'} />
          </div>
          <div className="sub">
            <p>
              <b>For Foodies</b>
              <p>Code of conduct</p>
              <p>Community</p>
            </p>
            <p>
                {!isAuth ? (
                    <Link to="/login">
                        <Button variant="contained" >Admin Login</Button>
                    </Link>
                    ) : ( 
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Link to="/createPost">
                            <Button variant="contained">Create Posts</Button>
                        </Link>
                        <Button variant="contained" onClick={()=>signUserOut()}>
                            Admin Out
                        </Button>
                    </div>
                )}
            </p>
            <p>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </p>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
              <div>
                <AiFillApple />
                <FaGooglePlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
