import React, {useState, useEffect} from 'react'
import { Button } from '@mui/material';
import './createPost.css';
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../../firebase-config';
import {useNavigate} from 'react-router-dom';

const CreatePost = ({isAuth}) => {

    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');

    const postsCollectionRef = collection(db, "posts");

    let navigate = useNavigate()

    const createPost = async () =>{
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    
            navigate("/Home");
    }

    useEffect(() =>{
        if(!isAuth){
            navigate("/login");
        }
    }, [])

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a post</h1>
        <div className='inputGp'>
            <label>Title: </label>
            <input placeholder='Title...' 
            onChange={(event) => {
                setTitle(event.target.value);
              }}/>
        </div>
        <div className='inputGp'>
            <label>Post: </label>
            <textarea placeholder='Post...' 
            onChange={(event) => {
              setPostText(event.target.value);
            }}/>
        </div>
        <Button onClick={()=>createPost()}>Submit post</Button>
      </div>
    </div>
  )
}

export default CreatePost
