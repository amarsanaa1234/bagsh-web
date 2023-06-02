import React, {useState, useEffect} from 'react'

import './createPost.css';
// import {addDoc, collection} from 'firebase/firestore';
// import { db, auth } from '../../firebase-config';
import {useNavigate} from 'react-router-dom';
import axios from '../../axios-orders';
import { Button, Form, Input, InputNumber, Modal, Select, Upload, message  } from "antd";  
import { PlusOutlined } from '@ant-design/icons';
import { Message } from '@mui/icons-material';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
 

const CreatePost = ({isAuth}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');  

  const [btnLoad, setBtnLoad] = useState(false);
  const [catLabel, setCatLabel] = useState("");
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');

    const [fileList, setFileList] = useState([]);
 


const sendPost = () =>{
  console.log("asd: ", fileList)
  if(fileList.length === 0){
    message.error("Зураг заавал оруулна уу!")
  }else{
    // const img = []; 
    // fileList.forEach(element => { 
    //    getBasee64(element.originFileObj, imageUrl =>
    //     console.log("imageUrl: ", imageUrl),
    //      img.push(imageUrl), 
    //   );
    // }); 
  const token = localStorage.getItem("idToken");
  // console.log("img: ", fileList[0].thumbUrl)
  const body = {
    localId: localStorage.getItem("localId"),
    newsList: {
      title,
      postText,
      img: fileList[0].thumbUrl,
    }
  }
  axios.post(`news.json?&auth=${token}`, body).then((res)=>{
    console.log("res: ", res.data)
  }).catch((err)=>{
    console.log("err", err)
  })

  }
  
}

const handleCancelImg = () => setPreviewOpen(false);
const handlePreview = async (file) => { 
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  setPreviewImage(file.url || file.preview);
  setPreviewOpen(true);
  setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
};
const handleChange = (file) => {  
    setFileList(file.fileList) 
};

function getBasee64(img, callback) { 
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img); 
}
  
const uploadButton = (<div><PlusOutlined /><div style={{marginTop: 8}}>Зураг</div></div>);
const showModal = () => {
  setIsModalOpen(true);
}; 
const handleCancel = () => {
  setIsModalOpen(false);
};

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
        {/* <Button onClick={()=>createPost()}>Submit post</Button> */}
        <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange} 
            >
              {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancelImg}>
              <img alt="example"style={{width: '100%',}}src={previewImage}/>
          </Modal>  
        <Button onClick={sendPost}>Submit post</Button>
      </div>
    </div>
  )
}

export default CreatePost
