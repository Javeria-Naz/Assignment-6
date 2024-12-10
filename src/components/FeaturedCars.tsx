import React from 'react'
import Link from 'next/link'
const FeaturedCars = () => {
  return (
    <div className='bg-white '>
      <h1 className='text-black font-bold mt-24 text-3xl'>Featured New Cars</h1>
      <div className='flex font-bold space-x-10'>
      <h1>Popular </h1>
      <h1>Upcoming </h1>
      <h1>Newly Launched </h1>
    </div>
    <div className='flex w-full'>
<div>
<Link href="car1">
  <img className='w-30 ' src="corolla.jpg" alt="/"/></Link>
  <p className='text-blue-800 ml-5'>Toyota Corolla</p>
  <p className='text-green-600 ml-5'>PKR 59.7- 75.5 lacs</p>
    </div>
    <div>
      <Link href="car2">
    <img className='w-30' src="Suzuki alto.png" alt="/"/></Link>
  <p className='text-blue-800 ml-5'>Suzuki Alto</p>
  <p className='text-green-600 ml-5'>PKR 25.3- 30.5 lacs</p>
    </div>
    <div>
      <Link href="car3">
    <img className='w-30' src="Honda_City.jpg" alt="/"/></Link>
  <p className='text-blue-800 ml-5'>Honda City</p>
  <p className='text-green-600 ml-5'>PKR 46.5- 58.5 lacs</p>
    </div>
    <div>
      <Link href="car4">
    <img className='w-30' src="honda civic.jpg" alt="/"/></Link>
  <p className='text-blue-800 ml-5'>Honda Civic</p>
  <p className='text-green-600 ml-5'>PKR 46.5- 58.5 lacs</p>
    </div>
    </div>
    </div>
  )
}

export default FeaturedCars
