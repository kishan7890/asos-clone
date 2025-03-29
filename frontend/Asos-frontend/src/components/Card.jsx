import React from 'react'
import './Card.css'

function Card({image,title,description,price,rating}) {
  return (
    <div className="card">
      <div class="image bg-slate-300 flex items-center justify-center p-1 w-80 relative my-9 "> 
                <img class="image1  " width="90px" height="120px" src={image} alt="image"/>
                 {/* <img class="image2" width="90px" src="https://assets.ajio.com/medias/sys_master/root/20230613/lmOn/648889ba42f9e729d73ee7c4/-473Wx593H-469505809-pink-MODEL7.jpg" alt="image"/>  */}
                <div class="heart-btn absolute top-3 right-3 p-2 px-3 rounded-full text-[#fff] ">
                    <i class="heart fa-solid fa-heart "></i>
                </div>
                <div class="details absolute text-center flex flex-col gap-3 items-center b">
                    <b>{title}</b>
                    <p>{description}</p>
                    <span class=" flex gap-3">
                        <p class=" bg-green-400 p-2 rounded-lg">{rating} <i class="fa-solid fa-star"></i></p>
                    <p>price <span>${price}</span></p>
                    </span>
                </div>
               

            </div>
      
    </div>
  )
}
// Card.defaultProps = {
//   image:'https://assets.ajio.com/medias/sys_master/root/20230613/lmOn/648889ba42f9e729d73ee7c4/-473Wx593H-469505809-pink-MODEL7.jpg',
//   title:"Calvin Klein",
//   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   price:"$34",
//   rating:"4.5"
// }

export default Card
