import React from 'react'

const Hero = () => {
  return (
    <div className='bg-white  text-black w-full '>
    

     <h1 className="text-center py-9 text-2xl font-bold  ">Sell Your Car On PakWheels at Best Price</h1>
     <hr></hr> 
     <div className='flex justify-center w-full gap-20'>
      <div>
     <h1 className="font-bold text-blue-900 text-2xl px-20">Post your Ad on PakWheels</h1>
      <div className='text-black font-normal text-lg mx-20'>
        <ol>
            <li>Post your Ad for Free in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your Car at Best Price</li>
        </ol>
        <button className='bg-red-600 text-white rounded-2xl py-3 px-5  mt-5'>Post Your Ad</button>
        </div>
        </div>
    
    
    <div className=''>
       <h1 className="text-start font-bold text-blue-900 text-2xl ">Try PakWheels Sell It For Me</h1>
        
        <div className='text-black font-normal text-lg'>
          <ol>
              <li>Post your Ad for Free in 3 Easy Steps</li>
              <li>Get Genuine offers from Verified Buyers</li>
              <li>We ensure Safe & Secure Transaction</li>
          </ol>
        
          
          <button className='text-white rounded-xl bg-blue-700 py-3 px-5 mt-5'>Register Your Car</button>
         </div>
        </div>
        </div>
        </div>


  )
}
export default Hero
