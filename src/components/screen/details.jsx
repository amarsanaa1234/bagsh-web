import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../axios-orders';
import '../../App.css'
import { Button } from '@mui/material';

function Details() {
  const [postList, setPostList] = useState([]);
  const { id } = useParams();
  const postId = Number(id)

  useEffect(() =>{
    getNews();
  }, []); 

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
let navigate = useNavigate();
 
  return (
    <div>
      {postList.map((item, index)=>{
        return(
          <div key={index}>
            {index === postId ? 
            <div key={index} className='detail'> 
            <div> 
              <img src={item[1].newsList.img ? item[1].newsList.img :  ""}/>
            </div>
            <div className='detail_title'>
              <h2>{item[1].newsList.title}</h2>
              <p className='detail_subText'>{item[1].newsList.subText}</p> 
              <p>{item[1].newsList.postText}</p> 
            </div>
            <Button onClick={() => {
                navigate('/Мэдээлэл');
              }}>Буцах</Button>
          </div>
            : ''}
          </div>
        )
      })}
    </div>
    )
  
}

export default Details
