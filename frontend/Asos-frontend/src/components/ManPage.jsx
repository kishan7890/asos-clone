import React,{useState} from 'react'
import Navbar from './Navbar'
import Heropage from './Heropage'
import Card from './Card'
import Footer from './Footer'

function ManPage() {
  const data = [
        {image:"https://i.pinimg.com/736x/48/57/d7/4857d7f6319f63d91fe278f00c92d1ba.jpg",title:"Calvin Klein",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"34.90",rating:"2"},
        {image:"https://i.pinimg.com/736x/53/37/94/5337947542fcf0c177c3598ea4228a4b.jpg",title:"Hot RN",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus. ",price:"23.65",rating:"4"},
        {image:"https://i.pinimg.com/736x/84/65/72/846572c06289ab0b2e750a505c0d155c.jpg",title:"Trending:Flares",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"23",rating:"3"},  
        {image:"https://i.pinimg.com/736x/4c/27/28/4c27289098937162f9d70bffa5ac452a.jpg",title:"Just-landed trainers",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
        {image:"https://i.pinimg.com/736x/7c/93/b2/7c93b21298dabe33e10dbabc06b5f721.jpg",title:"the INKEY list",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
        {image:"https://i.pinimg.com/736x/9a/c3/ad/9ac3addcc4bf5b13e241f233a8ad83f1.jpg",title:"TOP SHOP",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
      ]
  return (
    <div>
      <Navbar/>
      <Heropage image={"https://i.pinimg.com/736x/3e/f4/2e/3ef42e52db6fbc55cf38c5e99ceaf302.jpg"} text="Utility Edit"/>

      <div className="newin pl-4.5">
      <h1 className='text-3xl font-bold text-center'>All Man item</h1>
      <p className='text-center'>Discover the latest trends and styles</p>
      <div className=' flex flex-wrap gap-4 justify-center'>
        {data.map((item,index)=>(
          <Card key={index} image={item.image} title={item.title} description={item.description} price={item.price} rating={item.rating}/>
        ))}
      </div>
    {/* <Card/> */}
    </div>
    <Footer/>
    </div>
  )
}

export default ManPage
