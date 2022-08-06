import React from 'react'

const MenuItem=({item})=>{
    const MenuItem =(props)=>{
    return(
        <div>
            <h1>Hello There</h1>
            <h2> text : {props.data.text}</h2>
            <h2> price :{props.data.price}</h2>
            <h2> id :{props.data.id}</h2>
            <h2> Order Status: {props.data.done}</h2>
            
        </div>
    )
}
}

export default MenuItem;