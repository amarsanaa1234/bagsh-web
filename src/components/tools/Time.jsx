import React from 'react';
import '../../App.css';
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
    <div className='workTime'>
        {data.map((item, index)=>(
            <div key={index} style={{display: 'flex', flexDirection: 'column',}}>
                <h1>{item.day}</h1>
                <p>{item.hour}</p>
            </div>
        ))}
    </div>
  )
}

export default Time
