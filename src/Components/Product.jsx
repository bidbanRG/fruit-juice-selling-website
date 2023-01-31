import pic from '../assets/pic.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
import pic9 from '../assets/pic9.png';

import orange from '../assets/orange.png';
import banana from '../assets/banana.png';
import apple from '../assets/apple.png';
import grapes from '../assets/grapes.png';
import watermelon from '../assets/watermelon.png';
import guava from '../assets/guava.png';
import beans from '../assets/beans.png';
import { useRef, useState } from 'react';
import {useCart} from '../CartController/CartContext';

function Suffle(arr){

  for(let i = 0; i < arr.length; i++){
     let j = Math.floor(Math.random() * (i + 1));
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
  }

  return arr.reverse();

}

export default function Product(){

   
  const [productItems,setProductItems] = useState(ProductItems);
  let currentFlavour = useRef('');
  
  const handleChooseFlavour = (e) => {
      if(e.target.src !== currentFlavour.current){
        setProductItems((prev) => [...Suffle(prev)])
        currentFlavour.current = e.target.src;
     }
  }
 
 


	return (
    
         <>
       <div 
          className='flex md:w-[90%] lg:w-[70%] w-[95%] justify-around items-center m-auto rounded-2xl mb-8 mt-6'
          style={{
             boxShadow:'inset 2px 2px 8px #171717'
          }}
       >   
         <img src = {orange} onClick = {handleChooseFlavour}
              className='cursor-pointer w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px]'  />
             
         
           
           
          
               <img src = {grapes} onClick = {handleChooseFlavour}
              className='cursor-pointer w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] after:content-[fruit] after:text-2xl' />

          
           
                 <img src = {beans} onClick = {handleChooseFlavour}
                className='cursor-pointer w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] after:content-[fruit] after:text-2xl'/>

             
          
           
                <img src = {apple} onClick = {handleChooseFlavour}
                 className='cursor-pointer w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] after:content-[fruit] after:text-2xl'/>

                
          
          
                 <img src = {watermelon} onClick = {handleChooseFlavour}
                 className='cursor-pointer w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] after:content-[fruit] after:text-2xl'/>

                
          
         
                <img src = {banana} onClick = {handleChooseFlavour}
                   className='cursor-pointer w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] after:content-[fruit] after:text-2xl'/>

               
             
                 <img src = {guava} onClick = {handleChooseFlavour}
                  className='cursor-pointer w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] after:content-[fruit] after:text-2xl'/>


        </div>
       <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
            
           {
             productItems.map(({id,Node:Item}) => <Item key = {id} />)
           }
         
      </div>
      </>
      
	)
}

const Wrapper = ({children}) => {
  
     
  
   return(
     <div className = 'w-44 flex flex-col justify-center items-center rounded-2xl m-auto mt-4' 
        style={{
           boxShadow:'3px 3px 4px 3px #171717',
          
        }}
     >
       {children}
     </div>
   )
}


const CartButton = ({pic}) => {
      
      const {cartItems,setCartItems} = useCart();
      let [cartLabel,setCartLabel] = useState('CART');
    const onAddToCart = () => {
       setCartLabel('ADDED'); 
       setCartItems((prev) => [
        {
          url:pic,
          price:'20 $'
        },
        ...prev]);
       setTimeout(() => {setCartLabel('CART')},2000);
      
   }
   return (
      <button onClick = {onAddToCart} 
      className = {`flex-row outline-0 w-[80%] h-12 ${cartLabel == 'ADDED' ? 'text-black bg-white' : 'text-white bg-black' }  rounded flex justify-center items-center mt-1 mb-3`}
      >
                    <span className='text-3xl mr-2 mb-1'>  + </span>
                       <strong className='text-xl'> {cartLabel} </strong>   
      </button>
    )

}

const ProductItems = [

         {
           id:'k4j3h32k4',
          Node:() => <Wrapper>
                        <img src = {pic} className='w-[100%]'/>
                        <strong className='mt-2 text-xl '>
                             price:
                         <span className='font-curs'>   20.00 {" "} $ </span>  
                       </strong>
                       <strong className='mt-2 text-xl mb-2'>
                             rating:
                         <span className='font-curs'> {"  "}  4 / 5 </span>  
                       </strong>
                          <CartButton pic = {pic}/>                   
                      </Wrapper>}
            ,
           { id:'3l45h3l4k5hj',
            Node:() => <Wrapper> 
                        <img src = {pic3} className='w-[100%]'/>
                         <strong className='mt-2 text-xl '>
                               price:
                           <span className='font-curs'>   20.00 {" "} $ </span>  
                         </strong>
                         <strong className='mt-2 text-xl mb-2'>
                               rating:
                           <span className='font-curs'> {"  "}  4 / 5 </span>  
                         </strong>
                           <CartButton pic = {pic3}/>
                      </Wrapper> }
           ,
              { id:'l54h3l5h3l4',
                Node:() =>  <Wrapper>
                           <img src = {pic1} className='w-[100%]'/>
                           <strong className='mt-2 text-xl '>
                                  price:
                              <span className='font-curs'>   20.00 {" "} $ </span>  
                            </strong>
                            <strong className='mt-2 text-xl mb-2'>
                                  rating:
                              <span className='font-curs'> {"  "}  4 / 5 </span>  
                            </strong>
                              <CartButton pic = {pic1}/>
                           </Wrapper>}
             ,
            { id:'khjg45k3jhg5k3',
              Node:() => <Wrapper >  
                          <img src = {pic2} className='w-[100%]' />
                         <strong className='mt-2 text-xl '>
                                 price:
                             <span className='font-curs'>   20.00 {" "} $ </span>  
                           </strong>
                           <strong className='mt-2 text-xl mb-2'>
                                 rating:
                             <span className='font-curs'> {"  "}  4 / 5 </span>  
                           </strong>
                             <CartButton pic = {pic2}/>
                        </Wrapper> } 
           ,
           
          { id:'j45h32l5h',
            Node:() => <Wrapper  >  
                       <img src = {pic4} className='w-[100%]'/>
                       <strong className='mt-2 text-xl '>
                              price:
                          <span className='font-curs'>   20.00 {" "} $ </span>  
                        </strong>
                        <strong className='mt-2 text-xl mb-2'>
                              rating:
                          <span className='font-curs'> {"  "}  4 / 5 </span>  
                        </strong>
                         <CartButton pic = {pic4}/>
                      </Wrapper> }
           ,
           {id:'324234hnlkjnj4',
            Node:() => <Wrapper >  
                          <img src = {pic5} className='w-[100%]'/>
                          <strong className='mt-2 text-xl '>
                                 price:
                             <span className='font-curs'>   20.00 {" "} $ </span>  
                           </strong>
                           <strong className='mt-2 text-xl mb-2'>
                                 rating:
                             <span className='font-curs'> {"  "}  4 / 5 </span>  
                           </strong>
                             <CartButton pic = {pic5}/>
                        </Wrapper>}  
           ,
           {id:'23ljk4h23lk4hj',
            Node:() => <Wrapper >  
                          <img src = {pic6} className='w-[100%]'/>
                          <strong className='mt-2 text-xl '>
                                 price:
                             <span className='font-curs'>   20.00 {" "} $ </span>  
                           </strong>
                           <strong className='mt-2 text-xl mb-2'>
                                 rating:
                             <span className='font-curs'> {"  "}  4 / 5 </span>  
                           </strong>
                             <CartButton pic = {pic6}/>
                        </Wrapper>}  
           ,
          { id:'lkj234bn23lkj4',
            Node:() =>  <Wrapper  >  
                       <img src = {pic7} className='w-[100%]'/>
                       <strong className='mt-2 text-xl '>
                              price:
                          <span className='font-curs'>   20.00 {" "} $ </span>  
                        </strong>
                        <strong className='mt-2 text-xl mb-2'>
                              rating:
                          <span className='font-curs'> {"  "}  4 / 5 </span>  
                        </strong>
                          <CartButton pic = {pic7}/>
                      </Wrapper>}
            ,
            { id:'k3j5h34kj5h',
              Node:() =>  <Wrapper  >  
                         <img src = {pic8} className='w-[100%]'/>
                         <strong className='mt-2 text-xl '>
                                price:
                            <span className='font-curs'>   20.00 {" "} $ </span>  
                          </strong>
                          <strong className='mt-2 text-xl mb-2'>
                                rating:
                            <span className='font-curs'> {"  "}  4 / 5 </span>  
                          </strong>
                            <CartButton pic = {pic8}/>
                        </Wrapper>}
            ,
           { id:'kj345hk3jh453',
            Node:() =>  <Wrapper  > 
                        <img src = {pic9} className='w-[100%]'/>
                        <strong className='mt-2 text-xl '>
                               price:
                           <span className='font-curs'>   20.00 {" "} $ </span>  
                         </strong>
                         <strong className='mt-2 text-xl mb-2'>
                               rating:
                           <span className='font-curs'> {"  "}  4 / 5 </span>  
                         </strong>
                         <CartButton pic = {pic9}/>
                       </Wrapper> }
        ]