
import Link from "next/link"

export default function car1(){
    return(
        <div >
            <div className="flex justify-center items-center my-20">
            <h1 className="text-3xl font-semibold underline">Toyota Corolla 2024 Price in Pakistan, Images, Reviews and Specs</h1> </div>
        <div className="flex justify-center my-25">
            <img src="honda civic.jpg" className="h-20- w-4/12"/> </div>
            <div className="text-center space-x-8 items-center">
              <button className="bg-blue-800 text-white py-4 px-7 rounded-md">Book a Test Drive</button>  
              <button className="hover:bg-white text-blue-800 rounded-md">Request Bank Finance</button>
              <button className="hover:bg-white text-blue-800 rounded-md">Visit Place</button>
              <button className="hover:bg-white text-blue-800 rounded-md">Car Inspection</button>  
            </div>
            <div className="flex justify-center space-x-6">
                <h1 className="font-semibold text-4xl">Vehicle Description</h1></div>
<div className="flex text-center space-x-2 py-8 ">
<h1 className="font-bold ">Number of Doors</h1>
<h1>4</h1>
<h1 className="font-bold">Engine</h1>
<h1>1800 CC</h1>
<h1 className="font-bold">Condition</h1>
<h1>8.5/10</h1>
<h1 className="font-bold">Driven</h1>
<h1>9,500</h1>
<h1 className="font-bold">Suspesion Type</h1>
<h1>Soft Suspension</h1>
<h1 className="font-bold">Avg</h1>
<h1>13 Km per itr</h1>
<h1 className="font-bold">Transmission</h1>
<h1>Automatic</h1>
<h1 className="font-bold">Fuel type</h1>
<h1>High Octane</h1>
</div>
<div className="flex justify-center">
<h1 className="text-green-600  text-2xl">PKR 50,00,000</h1></div>
<div className="flex justify-center space-x-6 py-10">
<Link href="Forms"><button className="bg-blue-800 text-white py-4 px-8 rounded-md"> Make Payment</button></Link>
</div>



        </div>
    )
}