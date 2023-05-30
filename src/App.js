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

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Бидний тухай' element={<About/>}/>
        <Route path='Шинэ үйлчлүүлэгч' element={<Client/>}/>
        <Route path='Үйлчилгээ' element={<Service/>}/>
        <Route path='Мэдээлэл' element={<Newsletter/>}/>
        <Route path='Захиалга өгөх' element={<Appointment/>}/>
        <Route path='Урамшуулал' element={<Promotion/>}/>
        <Route path='Хүний нөөц' element={<Carreer/>}/>
        <Route path='Байршил цагийн хуваарь' element={<Location/>}/>
        <Route path='Холбоо барих' element={<Contact/>}/>
        <Route path='Асуулт' element={<FAC/>}/>
      </Routes>
    </div>
  );
}

export default App;
