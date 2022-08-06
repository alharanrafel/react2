import React from 'react'
import OrderItem from './OrderItem'
const OrderCard =({data})=>{

    return(
        <div>
            OrderCard
            {data.map((val)=>{
                return<li key={val.id}><OrderItem data ={val} /></li>
            })}
        </div>
    )
}
export default OrderCard;
