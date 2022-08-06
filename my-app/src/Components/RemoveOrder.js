import React, {useState} from 'react'

const RemoveOrder =({order, setorder})=>{


    const handleOrder =(event)=>{
        event.preventDefault();
        const id = event.target.elements.removeorder.value
        console.log("the id" , id)
        
        setorder((prev) => {
            console.log(order)

            return prev.filter((x) => id == order.id )
    })
    return (
        <form onSubmit={handleOrder}>
            <label>Remove order</label>
            <input name='removeorder' placeholder='Add Order' />
            <button type='submit'>Remove Order</button>
        </form>
   
        )
    }
}
    export default RemoveOrder;
    