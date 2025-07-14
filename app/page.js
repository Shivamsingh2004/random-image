'use client';
import axios from 'axios'
import React, {useState } from 'react'



const page = () => {
  const [image, setimage] = useState([]); 
 const getimage = async ()=> {
    try{
      const respones = await axios.get("https://picsum.photos/v2/list");
      const data = respones.data;
      setimage(data)
      console.log(image)
    }catch(error){
      console.error("error in image")
  
    }
  } 

    return (
    <>
    <div className='flex  justify-center'>
      <h1 className='text-8xl bg-black font-bold text-white font-serif  w-full text-center '>Random Image generator</h1>
    </div>
    <div className='flex  justify-center'>
      <button className='  bg-blue-600 m-8  px-50 py-8 text-7xl text-white font-extrabold rounded-3xl' 
      onClick={getimage}> Get Image</button>
    </div>
    <div className='flex flex-wrap justify-center gap-4 px-4'>
      {image.map((elem,i)=>{
         return <img 
         key={i}
         src={elem.download_url}
         width={300}
         height={300}/>

        

      })}
    </div>


    </>
   
  )
}
export default page
