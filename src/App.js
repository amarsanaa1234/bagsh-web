import React, {useState} from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/screen/About';
import Appointment from './components/screen/Appointment';
import Carreer from './components/screen/Carreer';
import Client from './components/screen/Client';
import Home from './components/screen/Home';
import Contact from './components/screen/Contact';
import FAC from './components/screen/FAC';
import Location from './components/screen/Location';
import Newsletter from './components/screen/Newsletter';
import Promotion from './components/screen/Promotion';
import Service from './components/screen/Service';
import Login from './components/tools/Login';
import Footer from './components/tools/Footer';
import CreatePost from './components/tools/CreatePost';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Бидний тухай' element={<About/>}/>
        <Route path='Шинэ үйлчлүүлэгч' element={<Client/>}/>
        <Route path='Үйлчилгээ' element={<Service/>}/>
        <Route path='Мэдээлэл' element={<Newsletter isAuth={isAuth}/>}/>
        <Route path='Захиалга өгөх' element={<Appointment/>}/>
        <Route path='Урамшуулал' element={<Promotion/>}/>
        <Route path='Хүний нөөц' element={<Carreer/>}/>
        <Route path='Байршил цагийн хуваарь' element={<Location/>}/>
        <Route path='Холбоо барих' element={<Contact/>}/>
        <Route path='Асуулт' element={<FAC/>}/>
        <Route path='login' element={<Login setIsAuth={setIsAuth} />}/>
        <Route path='createPost' element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
      <Footer isAuth={isAuth} setIsAuth={setIsAuth}/>
    </div>
  );
}

export default App;
