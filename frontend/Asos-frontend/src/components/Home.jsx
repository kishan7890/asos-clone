import React,{useState} from 'react'

import Navbar from './Navbar'
import Heropage from './Heropage'
import Card from './Card'
import Footer from './Footer'

function Home() {
  const [data, setData] = useState([
      {image:"https://i.pinimg.com/736x/da/a0/43/daa0434afafdb64e2a72539224ec10ae.jpg",title:"Calvin Klein",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"34.90",rating:"2"},
      {image:"https://i.pinimg.com/736x/88/6a/35/886a35e7fac655ee4aefacd4826946a1.jpg",title:"Hot RN",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus. ",price:"23.65",rating:"4"},
      {image:"https://i.pinimg.com/736x/f6/cc/69/f6cc6991968e893797099eda9abed02a.jpg",title:"Trending:Flares",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"23",rating:"3"},  
      {image:"https://i.pinimg.com/736x/e6/1d/19/e61d19b848fbc47923d75092122be737.jpg",title:"Just-landed trainers",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
      {image:"https://i.pinimg.com/736x/3c/10/d2/3c10d273e4c386669e84d55a6201c56e.jpg",title:"the INKEY list",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
      {image:"https://i.pinimg.com/736x/9a/c3/ad/9ac3addcc4bf5b13e241f233a8ad83f1.jpg",title:"TOP SHOP",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus.",price:"32",rating:"5"},
    ])
    // setData(data)
  return (
    <div>
      <Navbar />
      <Heropage image="https://i.pinimg.com/736x/83/fa/4e/83fa4e24192e77f253f716ae60571134.jpg" text="Welcome to Asos shopping mall"/>
      <div className="newin pl-4.5">
      <h1 className='text-3xl font-bold text-center'>All item</h1>
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

export default Home
