import React from 'react'
import { useState, useEffect } from 'react';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {db, auth} from '../../firebase-config';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from '../../axios-orders';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Newsletter({isAuth}) {

  // const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [open, setOpen] = React.useState(false);
  const [postList, setPostList] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() =>{
    // const getPosts = async()=>{
    //   const data = await getDocs(postsCollectionRef);
    //   setPostList(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    //   console.log(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    // }
    // getPosts();
    getNews();
  }, []); 

  const deletePost = async (id)=>{
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  const getNews =  () =>{
    if(localStorage.getItem("idToken")){
      axios.get("news.json").then((res)=>{ 
        const data = Object.entries(res.data).reverse();  
        console.log("data: ", data)
        setPostList(data);
      }).catch((err)=>{
        console.log("err", err);
      })
    } 
}
const deleteFunc = (params) =>{  
  const token = localStorage.getItem("idToken"); 
  axios.delete(`news/${params}.json?&auth=${token}`).then((res)=>{  
    alert("Амжилттай устлаа") 
    getNews();
  }).catch((err)=>{ 
    getNews();
  }) 
}
const editFunc = (e) =>{
  const token = localStorage.getItem("idToken"); 
  const body = { 
    localId: localStorage.getItem("localId"),
    newsList: { 
      // title: e[1].newsList.title,
      title: "amraaaa",
      postText: "description",
      img: ""
    }
}  
  axios.patch(`news/${e[0]}.json?&auth=${token}`, body).then((res)=>{  
    alert("Амжилттай")   
      getNews();
  }).catch((err)=>{  
    console.log("err")
  }) 

}
  return (
    <div className='homePage'>
      {/* {postList.map((post, index)=>{
        return (
          <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      {post.title}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
          // <div className='post'>
          //   {post.title}
          //   <div>
          //     {post.postText}
          //   </div>
          //   <div>
          //     {isAuth && post.author.id === auth.currentUser.uid && <Button onClick={()=>{
          //       deletePost(post.id)
          //     }}>
          //       <DeleteIcon/>
          //     </Button>}
          //   </div>
          // </div>
        )
      })} */}
      {postList.length === 0 ? null : <> 
      {postList.map((e)=>(
        <div style={{margin: "10px", background: "#ccc"}}> 
          <div>title: {e[1].newsList.title}</div>
          <div>postText: {e[1].newsList.postText}</div> 
          <div> <img src={e[1].newsList.img ? e[1].newsList.img :  ""} width={300}/></div>
          <div><button onClick={()=>deleteFunc(e[0])}>delete</button> </div>
          <div> <button onClick={()=>editFunc(e)}>edit</button></div>
        </div>
      ))}
      </>
    }

    </div>
  )
}

export default Newsletter
