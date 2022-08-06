import React from 'react'

const OrderItem =({data})=>{
    return(
        <div>
            <li>{data.text}</li>
        </div>
    )
}
export default OrderItem;