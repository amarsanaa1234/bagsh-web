import React from 'react'
import { useState, useEffect } from 'react';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {db, auth} from '../../firebase-config';
import { useNavigate } from "react-router-dom";
import { Form, Input, InputNumber, Modal, Upload, message } from 'antd';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from '../../axios-orders';
import '../../App.css';
import TextArea from 'antd/es/input/TextArea';
import { Navigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Newsletter({isAuth}) {

  // const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [open, setOpen] = React.useState(false);
  const [fileList, setFileList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const handleCancelImg = () => setPreviewOpen(false);
    const [loadingS, setLoading] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  useEffect(() =>{
    getItemList();
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
        setPostList(data);
      }).catch((err)=>{
        console.log("err", err);
      })
    } 
}
const getItemList = () =>{ 
  const token = localStorage.getItem("idToken")
  // setLoadingTable(true); 
  axios.get('news.json').then((res)=>{ 
      const data = Object.entries(res.data).reverse();  
      setItemList(data);
  }).catch((err)=>{
      console.log("err: ", err)
  }).finally(()=>{
    // setLoadingTable(false)
  }) 
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
function getBasee64(img, callback) { 
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img); 
}
  const showModal = () => {
    setIsModalOpen(true);
  };

  const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


//     if(props.info.img.length === 1){
//       setFileList([
//         {
//           uid: '-1',
//           name: 'image.png',
//           status: 'done',
//           thumbUrl:  props.info.img[0],
//         }, 
//       ]);
//     } else if(props.info.img.length === 2){ 
//       setFileList([
//         {
//           uid: '-1',
//           name: 'image.png',
//           status: 'done',
//           thumbUrl:  props.info.img[0],
//         }, 
//         {
//           uid: '-2',
//           name: 'image2.png',
//           status: 'done',
//           thumbUrl:  props.info.img[1],
//         }, 
//       ]);
//     }else if(props.info.img.length === 3){
//       setFileList([
//         {
//             uid: '-1',
//             name: 'image.png',
//             status: 'done',
//             thumbUrl:  props.info.img[0],
//         }, 
//         {
//           uid: '-2',
//           name: 'image2.png',
//           status: 'done',
//           thumbUrl:  props.info.img[1],
//         }, 
//         {
//           uid: '-3',
//           name: 'image3.png',
//           status: 'done',
//           thumbUrl:  props.info.img[2],
//         }, 
//       ]);
//     }else if(props.info.img.length === 4){
//       setFileList([
//         {
//             uid: '-1',
//             name: 'image.png',
//             status: 'done',
//             thumbUrl:  props.info.img[0],
//         }, 
//         {
//           uid: '-2',
//           name: 'image2.png',
//           status: 'done',
//           thumbUrl:  props.info.img[1],
//         }, 
//         {
//           uid: '-3',
//           name: 'image3.png',
//           status: 'done',
//           thumbUrl:  props.info.img[2],
//         }, 
//         {
//           uid: '-4',
//           name: 'image4.png',
//           status: 'done',
//           thumbUrl:  props.info.img[3],
//         }, 
//       ]);
//     }else if(props.info.img.length === 5){
//       setFileList([
//         {
//             uid: '-1',
//             name: 'image.png',
//             status: 'done',
//             thumbUrl:  props.info.img[0],
//         }, 
//         {
//           uid: '-2',
//           name: 'image2.png',
//           status: 'done',
//           thumbUrl:  props.info.img[1],
//         }, 
//         {
//           uid: '-3',
//           name: 'image3.png',
//           status: 'done',
//           thumbUrl:  props.info.img[2],
//         }, 
//         {
//           uid: '-4',
//           name: 'image4.png',
//           status: 'done',
//           thumbUrl:  props.info.img[3],
//         }, 
//         {
//           uid: '-5',
//           name: 'image4.png',
//           status: 'done',
//           thumbUrl:  props.info.img[4],
//         }, 
//       ]);
//     }
    
//     setInfo(props.info);
//     setCateList(props.info);
//     setIsModalOpen(true);
//   }; 
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
const uploadButton = (
  <div> 
    {/* <PlusOutlined /> 
    <div style={{marginTop: 8}}>Зураг
    </div> */}
  </div>
);
const onFinish = (values) => {
  // setLoading(true);
  const token = localStorage.getItem("idToken");
  const img = []; 
  // fileList.forEach(element => {   
  //   if(element.originFileObj){ 
  //     getBasee64(element.originFileObj, imageUrl =>
  //       img.push(imageUrl), 
  //    );
  //   }else{ 
  //     img.push(element.thumbUrl)
  //   } 
  // });

  // setTimeout(() => { 
  //   const body = { 
  //     localId: localStorage.getItem("localId"),
  //     itemList: { 
  //       id: values.id,
  //       description: values.description,
  //       price: values.price, 
  //       title: values.title,  
  //       cnt: 1,
  //       img: img
  //     }
      
  // }  
  //   axios.patch(`itemList/${props.data}.json?&auth=${token}`, body).then((res)=>{  
  //     message.success("Амжилттай")  
  //     if(res.data.name) 
  //       message.success("Амжилттай") 
  //       // setLoading(false);
  //       props.getItemList();
  //       setIsModalOpen(false);
      
  //   }).catch((err)=>{  
  //       // setLoading(false);
  //       message.error("Алдаа")
  //       setIsModalOpen(false);
  //   }) 
  // }, 800); 
 

};
let navigate = useNavigate();

  return (
    <div>
      <div className='flex_box'>
      <div className='flex_title'>
        <h1 className='components_title'>BLOG</h1>
      </div>
      </div>
      <div className='homePage'>
      {postList.length === 0 ? 
      <>
        {itemList.map((e, index)=>(
          <div key={index} className='news'> 
            <div> 
              <img src={e[1].newsList.img ? e[1].newsList.img :  ""} />
            </div>
            <div className='news_title'>
              <h2>{e[1].newsList.title}</h2>
              <p>{e[1].newsList.subText}</p> 
              <Button onClick={() => {
                navigate(`/details/${index}`);
              }}>илүү ихийг унших</Button>
            </div>
          </div>
        ))}
      </> 
      : 
      <> 
        {postList.map((e, index)=>(
          <div key={index} className='news'> 
            <div> 
              <img src={e[1].newsList.img ? e[1].newsList.img :  ""} />
            </div>
            <div className='news_title'>
              <h2>{e[1].newsList.title}</h2>
              <p>{e[1].newsList.subText}</p> 
              <Button onClick={() => {
                navigate(`/details/${index}`);
              }}>илүү ихийг унших</Button>
            </div>
            <Button onClick={()=>deleteFunc(e[0])}>delete</Button>
            <Button onClick={()=>{showModal()}}>edit</Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form  size="middle" initialValues={{ remember: true,
                        title: e[1].newsList.title,  
                        postText: e[1].newsList.postText,
                        img:  e[1].newsList.img ? e[1].newsList.img[1] :  "",
                      }} onFinish={onFinish} >
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-circle"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange} 
                    >
                      {fileList.length >= 5 ? null : uploadButton}
                  </Upload> 
                  <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancelImg}>
                      <img alt="example"style={{width: '100%',}}src={previewImage}/>
                  </Modal>  
                    <Form.Item label="Гарчиг" name="title" rules={[{ required: true, message: ' Гарчиг гаа оруулна уу!'}]}>
                        <Input placeholder="Гарчиг" />
                    </Form.Item> 
                    <Form.Item label="Дэлгэрэнгуй" name="postText" rules={[ { required: true, message: 'Дэлгэрэнгуй мэдээлэлээ оруулна уу!'}]}>
                      <TextArea placeholder="Дэлгэрэнгуй" showCount/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}} disabled={loadingS} loading={loadingS} size="large"> Хадгалах </Button> 
                    </Form.Item>
                </Form>
              </Modal>
          </div>
        ))}
      </>
    }

    </div>
    </div>
  )
}

export default Newsletter
