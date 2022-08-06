
import React ,{useState} from 'react'
import AddOrder from './AddOrder'
import OrderCard from './OrderCard'
import 
const Order =()=>{
    const [order,setorder] = useState([
        {id:1,text:' chicken nuggits',done:'false'},
        {id:2,text:'wings',done:'true'},
        {id:3,text:'burger',done:'false'},
        {id:4,text:'drink',done:'true'},
      ])
    return(
        <div>
        
      <h1>  Order is working </h1>
       <OrderCard data={order}/>
       <AddOrder setorder ={setorder} />
       <RemoveOrder order = {order} setorder={setorder} />
        </div>
    )
}
export default Order;