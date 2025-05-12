import React from "react"
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
export const Home = () => {

    const navigate = useNavigate();

    return( 

        <div className="bg-slate-300 h-screen relative ">
            <div className="text-5xl md:text-7xl font-semibold text-black flex justify-center pt-6 md:pt-4">
                ShazorPay
            </div>
            <div>
                <p className="text-lg text-gray-600 text-center font-normal pt-1">Your Payments, Simplified </p>
            </div>
            <div className="text-2xl md:text-5xl pl-8 pt-32 md:pt-32 font-semibold ">
                Smarter Payments Start Here !
            </div>
            <div className="pl-16 md:pl-18 pt-4 text-lg md:text-xl text-gray-600">
                Send, receive, and manage money effortlessly with ShazorPay ♥️
                
            </div>
            {/* <div className="pl-8 pt-4">
        <TypeAnimation
         sequence={[
          "Experience the future of payments",
          2000,
          "Seamless transactions every time",
          2000,
          "A smarter way to manage your money",
          2000,
        ]}
          wrapper="span"                     
          speed={100}                         
          repeat={Infinity}                 
          className="text-2xl pt-4"
        />
      </div> */}
      <div className="pl-12 md:pl-28 pt-12 flex gap-x-2">
        <button onClick={() => {
             setTimeout(() => {
      navigate("/signup");
    }, 500);
        }} type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg md:text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
        <button onClick={() => {
            setTimeout(() => {
                navigate("/error")
            }, 500)
        }} type="button" class=" bg-white hover:bg-grey-600 focus:ring-4 focus:ring-white font-medium rounded-lg text-lg md:text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-gray-100 focus:outline-none dark:focus:ring-gray-400">Dwonload App</button>
      </div>
     <div className="absolute right-6 bottom-53 hidden md:block">
  <img src="image.png" alt="ShazorPay App" className="rounded-3xl shadow-2xl w-[670px] md:w-[770px]" />
</div>
<footer className="text-center text-md text-gray-600 py-4 pt-46 md:pt-68">
  Made with ❤️ by Ishant © 2025
</footer>

        </div>
    )
}