import Link from "next/link";

 export default function Forms(){
    return(
        <div className="bg-blue-100">
            <h1 className="text-3xl font-semibold text-center uppercase">
                enter your details
            </h1>

            <div>
            <form className="mt-20 flex gap-5 justify-center items-center flex-col border">
                <input type="name" className="p-2 rounded-2xl w-2/5 border border-blue-800"
                 placeholder="Enter Your Name" />

                <input type="email" className="p-2 rounded-2xl w-2/5 border border-blue-800" 
                placeholder="Enter Your Email" />

                <input type="number" className="p-2 rounded-2xl w-2/5 border border-blue-800" 
                placeholder="Card Number"/>

                 <input type="text" className="p-2 rounded-2xl w-2/5 border border-blue-800" 
                placeholder="Adress" />
                <Link href="Thankyou">
                <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order</button></Link>
            </form>
            </div>

        </div>
    )
}
