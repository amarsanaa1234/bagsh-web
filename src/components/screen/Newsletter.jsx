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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Newsletter({isAuth}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");


  useEffect(() =>{
    const getPosts = async()=>{
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
      console.log(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }
    getPosts();
  }, []); 

  const deletePost = async (id)=>{
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  return (
    <div className='homePage'>
      {postList.map((post, index)=>{
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
      })}
    </div>
  )
}

export default Newsletter
