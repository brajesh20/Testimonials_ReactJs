import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div className='image'>
        <div className='circle'></div>
        <img src={data.image} alt={'profile_picture'}></img>
      </div>
      <div>
        <p>{data.name}</p>
      </div>
      <div>
        <p>{data.job}</p>
      </div>
      <div style={{ color: 'violet' }}>
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div style={{ opacity: '70%' }}>
        <p>{data.text}</p>
      </div>
      <div style={{ color: 'violet' }}>
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  )
}

export default Card
