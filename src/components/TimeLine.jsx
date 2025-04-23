
import React from 'react'
import TimeLineItem from './TimeLineItem'
import data from '../assets/data.json'


const TimeLine = () => {
  return (
    <div id='timeline'>
        <div className="timelineBox">
{
    data.projects.map((i,index)=>(
        <TimeLineItem heading={i.title} text={i.description} index={index} key={i.title}/>
    ))
}
        </div>
    </div>
  )
}



export default TimeLine