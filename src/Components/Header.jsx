import menuicon from '../assets/menuicon.png'
import cart from '../assets/cart.png' 
import orange from '../assets/orange.png'
import { useCart } from '../CartController/CartContext'
import CardItems from './CardItems'
const menus = ['home','categories','buy','about']

export default function Header(){
  
  const {cartItems,cartButtonPressed,setCartButtonPressed} = useCart();
   console.log(cartButtonPressed);
	return(
		<header className="w-[100%] h-20 flex justify-between items-center md:justify-around">
         {cartButtonPressed && <CardItems/>}
		<strong className=" font-curs font-extrabold  ml-4 text-3xl md:text-5xl mt-2 drop-shadow-md "> FreshO </strong>
           <section className="hidden md:flex  md:justify-between  items-center w-[100%] md:w-[45%] h-[100%] md:float-right md:mr-12">

             {
             	menus.map((menu) => 
             		 <strong className="md:text-2xl text-xl tracking-wider cursor-pointer text-gray-400 shadow-lg shadow-pink-500 hover:text-black px-2 py-1 rounded-lg"> 
             		     {menu}  
             	  </strong> 
             	)
             }
             
              <button className='relative flex outline-0 rounded justify-center items-center ml-24'
                  style={{boxShadow:'2px 2px 4px #171717'}}
                  onClick={() => { 
                     if(cartItems.length > 0) 
                     setCartButtonPressed(!cartButtonPressed)
                  }
            }
              >
                {cartButtonPressed ? <strong className='text-4xl p-2'> X </strong> : <img className="w-10 p-2 min-w-[3rem]" src = {cart} />}
               { cartItems.length > 0 && <div className='absolute top-[-2px] right-[2px]  flex justify-center items-center w-5 h-5 rounded-full bg-red-400 '> 
                                { cartItems.length > 0 ? cartItems.length : '' } </div>}
            </button>
           </section>
           
           <div className="relative md:hidden mr-6 flex justify-center items-center rounded-2xl"
              style={{boxShadow:'2px 2px 4px #171717'}}
           >
              <img className="w-10 md:w-12 p-2 mr-3" src = {menuicon} />
              {cartButtonPressed ? <strong className='text-2xl p-2'  onClick={() => { 
                     if(cartItems.length > 0) 
                     setCartButtonPressed(!cartButtonPressed)
                  }
            }> X </strong> :
              <img className="w-10 md:w-12 p-2" src = {cart}  onClick={() => { 
                     if(cartItems.length > 0) 
                     setCartButtonPressed(!cartButtonPressed)
                  }
            } />}
               { cartItems.length > 0 && 
                    <div className='absolute top-[-2px] right-[2px]  flex justify-center items-center w-5 h-5 rounded-full bg-red-400 '> 
                                 {cartItems.length > 0 ? cartItems.length : ''}  </div>}
           </div>


		</header>
	  )
}
