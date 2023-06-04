import React from 'react'
import Time from './../tools/Time';

function Location() {
  return (
    <div className='flex_box'>
      <div className='flex_title'>
        <h1>Байршил цагийн хуваарь</h1>
      </div>
      <div style={{marginTop: 40, backgroundColor: "#ABB5C1", width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.796693558959!2d106.91680647734941!3d47.920971153291354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692438c74ce17%3A0xd67030cf142c1b4d!2sParliament%20of%20Mongolia!5e0!3m2!1sen!2smn!4v1685889904356!5m2!1sen!2smn" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Time/>
    </div>
  )
}

export default Location
