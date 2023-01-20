

import React from 'react'

import Header from './Components/Header';
import Product from './Components/Product'; 


import bg_svg from './assets/wave.svg';
import bottles from './assets/vegetables.png';
import mango from './assets/bottlesjuice.png'






function App() {


  return (
   
       
    <div
     style={{backgroundImage:`url(${bg_svg})`,aspectRatio:900/300}} 
     className="bg-no-repeat bg-center bg-cover w-screen  sm:w-[100%]"
    >
      <Header/>
      <div className='flex'>
     <aside className='w-[50%]  mt-20 hidden md:flex flex-col'>  
       <div className='ml-16 w-[80%] h-16 md:text-2xl lg:text-3xl'> 
           <strong> 
           "Experience the taste of nature's sweetness, with  our premium quality, fresh
           squeezed   fruit juice delivered straight your doorstep" </strong>
       </div>

       <img src = {bottles}  className='md:hidden lg:flex w-[100%] mt-28' />
     </aside> 

      <section className=' w-[100%] md:w-[50%] flex flex-col'> 
        <img src = {mango}  className=' w-[100%] mt-12  rounded-full ' />
        
      </section>
      </div>
       <Product/>
    </div>
    
  )
}

export default App
