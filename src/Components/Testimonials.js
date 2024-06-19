import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Card from './Card'
import {useState} from 'react'

const Testimonials = ({ data }) => {

    const [index,setIndex]=useState(0)

    const leftHandler=()=>{
        if(index-1<0)
            setIndex(data.length -1)
        else
        setIndex(index-1)
    }    

    const RightHandler=()=>{
        if(index+1 >= data.length)
            setIndex(0)
        else
        setIndex(index+1)
    }

    const surpriseHandler=()=>{
        setIndex(Math.floor(Math.random()*data.length)) 
    }

  return (
    <div>
      <Card data={data[index]}></Card>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      
        <div className='Swipe'>
          <button onClick={leftHandler}>
            <FiChevronLeft></FiChevronLeft>
          </button>
          <button onClick={RightHandler}>
            <FiChevronRight></FiChevronRight>
          </button>
        </div>
      </div>
    
      <div>
        <button onClick={surpriseHandler} className='surprise'>Surprise Me</button>
      
      </div>

    </div>
  )
}

export default Testimonials
