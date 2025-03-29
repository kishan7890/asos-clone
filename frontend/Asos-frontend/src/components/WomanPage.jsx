import React,{useState} from 'react'
import Navbar from './Navbar'
import Heropage from './Heropage'
import Card from './Card'
import Footer from './Footer'


function WomanPage() {
  const [data, setData] = useState([
    {image:"https://i.pinimg.com/736x/2d/44/25/2d4425ac5e91362316c5d902efdd6f29.jpg",title:"Calvin Klein",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"34.90",rating:"2"},
    {image:"https://i.pinimg.com/736x/88/6a/35/886a35e7fac655ee4aefacd4826946a1.jpg",title:"Hot RN",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus. ",price:"23.65",rating:"4"},
    {image:"https://i.pinimg.com/736x/f6/cc/69/f6cc6991968e893797099eda9abed02a.jpg",title:"Trending:Flares",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"23",rating:"3"},  
    {image:"https://i.pinimg.com/736x/5e/16/fc/5e16fcd66246dcf61f8ade9aeb6a084e.jpg",title:"Just-landed trainers",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
    {image:"https://i.pinimg.com/736x/3c/10/d2/3c10d273e4c386669e84d55a6201c56e.jpg",title:"the INKEY list",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
    {image:"https://i.pinimg.com/736x/a2/cb/11/a2cb11632b86f237164bfa03d70da280.jpg",title:"TOP SHOP",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
  ])

  return (
    <div>
    
    <Navbar/>
    <Heropage image="https://i.pinimg.com/736x/98/a4/e3/98a4e315c4d203658185405fd514e35a.jpg" text="New -Season"/>
    <div className="newin pl-4.5">
      <h1 className='text-3xl font-bold text-center'>All Woman item</h1>
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

export default WomanPage
