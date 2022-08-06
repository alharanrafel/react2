import React ,{useState} from 'react'

 const AddOrder = ({setorder}) => {

     const handleOrder = (event) =>{
         event.preventDefault();
         const text = event.target.elements.addorder.value
         const order = {
             id: 5,
             text,
             done:true,
         }
         setorder((prev) => {
             return prev.concat(order)
         })
     }

   return (
     <form onSubmit={handleOrder}>
         <input name='addorder' placeholder='Add Order' />
         <button type='submit'>Submit Order</button>
     </form>

     )
 }

 export default AddOrder;