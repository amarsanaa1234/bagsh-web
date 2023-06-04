import React from 'react';
import '../../App.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
function Time() {

    const data = [
        {day: 'Monday', hour: '9:00 am - 5:00 pm'},
        {day: 'Tuesday', hour: '9:00 am - 5:00 pm'},
        {day: 'Wednesday', hour: '9:00 am - 5:00 pm'},
        {day: 'Thursday', hour: '9:00 am - 5:00 pm'},
        {day: 'Friday', hour: '9:00 am - 5:00 pm'},
        {day: 'Saturday', hour: 'Closed'},
        {day: 'Sunday', hour: 'Closed'}
    ]

  return (
    <div className='loc'>
        <div className='location'>
            <div className='location_title'>
                <p>Манай үйлчилгээний газар</p>
            </div>
            <div className='location_contact'>
                <div className='location_text'>
                    <LocationOnIcon fontSize="large"/>
                    <p>San Diego, CA 92121</p>
                </div>
                <div className='location_text'>
                    <PhoneIcon fontSize="large"/>
                    <p>800-462-8749</p>
                </div>
            </div>
        </div>
        <div className='workTime'>
            {data.map((item, index)=>(
                <div key={index} style={{display: 'flex', flexDirection: 'column',}}>
                    <h2>{item.day}</h2>
                    <p>{item.hour}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Time
