import React from 'react'
import MenuCard from './MenuCard'

const Menu =()=>{
    const data =[
    {id: 1, text: 'Buffalo Wings',price: '7.99',done :'false'},
    {id: 2, text: 'Buffalo Chicken Sandwich', price: '6.99',done:'true'},
    {id: 3, text: 'Cheese Burger', price: '9.75', done: 'false'},
    {id: 4, text: 'Cheese Quesadilla', price: '3.75', done: 'true'},
    {id: 5, text: 'Buffalo Chicken Sandwich', price: '7.75', done: 'false'},
    {id: 6, text: 'Cheese Sticks', price: '6.99', done: 'true'},
    {id: 7, text: 'Chicken Bucket', price: '9.75', done: 'false'},
    {id: 8, text: 'Combination', price: '9.75', done: 'true'},
    {id: 9, text: 'Grilled Chicken Burger', price: '9.75', done: 'false'}
    ];
    return(
        <div>Menu
         <MenuCard alldata ={data} />
               
     </div>
    )
}
export default Menu;
