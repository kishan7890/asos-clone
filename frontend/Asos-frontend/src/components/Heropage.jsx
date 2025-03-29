import React from 'react'
import './Heropage.css'

function Heropage({image, text}) {
  return (
    <div className='heropage'>
    <div className="hero  relative">
    <img src={image} alt="image" className='' />
      <b className='text absolute'>{text}</b>

    </div>
      
    </div>
  )
}
Heropage.defultProps = {
  image:'https://i.pinimg.com/736x/f5/16/f8/f516f888d746128fd90ebf349520f759.jpg',text:"Hero" }

export default Heropage
