import React from 'react'
import Teams from './../tools/Teams';
import '../../App.css';
import Time from './../tools/Time';

function Team() {
  return (
    <div className='flex_box'>
      <div className='flex_title'>
        <h1 className='components_title'>Meet the Team</h1>
      </div>
      <Teams/>
      <Time/>
    </div>
  )
}

export default Team
