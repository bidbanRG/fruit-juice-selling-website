import { useCart } from "../CartController/CartContext"
import cartbg from "../assets/cartbg.png"
import { useEffect } from "react";

export default function CardItems(){

             const {cartItems,cartButtonPressed,setCartButtonPressed} = useCart();

             useEffect(() => {
                
                	
                	     if(cartItems.length === 0 && cartButtonPressed)
                	   	       setCartButtonPressed((prev) => !prev);
                	    
                	  	
             },[cartItems.length]);

	return(
       <main className="absolute top-0 right-0 left-0 bottom-0  backdrop-blur-[10px] flex items-center justify-center">
            <section className="relative h-[80vh] w-[100%] lg:w-[45%] rounded-2xl overflow-y-scroll flex flex-col">
              
               {
               	   cartItems.map((item) => <Items url = {item.url} price = {item.price} /> )
               }

            </section>
       </main>
      )
}

const Items = ({url,price}) => {
    return(
       <div className = 'w-44 flex flex-col justify-center items-center rounded-2xl  mt-4 m-auto'>
           <img src = {url} className='w-[100%]'/>
           <div className="m-auto">
                 <strong className=' text-xl'>
                             price:
                      <span className='font-curs'>   {price}{" "}  </span>
                       
               </strong>
            </div>   
            <RemoveButton pic = {url}/>
     </div>

    )
}
const RemoveButton = ({pic}) => {
      
      const {cartItems,setCartItems} = useCart();
    
    const onRemoveFromCart = () => {
       setCartItems((prev) => [...prev.filter((item) => item.url !== pic )]
     );
      
   }
   

   return (
      <button onClick = {onRemoveFromCart} className='m-auto outline-0 w-[80%] h-12 text-white bg-black rounded flex justify-center items-center mt-1 mb-3'>
                   
                       <strong className='text-xl px-8'> Remove </strong>   
      </button>
    )

}