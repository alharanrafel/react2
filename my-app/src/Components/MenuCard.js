import React from 'react'
import MenuItem from './MenuItem'

const MenuCard =(props)=>{
    return(
        <div>
            {PaymentResponse.alldata.map((val)=>{
                return <i><MenuItem data={val} /></i>
            })}
        </div>
    )
}
export default MenuCard;
