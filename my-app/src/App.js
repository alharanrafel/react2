
import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Order from './Components/Order'
import Menu from './Components/Menu'
import {Routes,Route} from 'react-router-dom '
import './App.css'

const App =()=> {
    return(
        <div style={{border: '7px solid red'}}>

            <h1 style={{color:'blue'}}> Mr. Fast Food</h1>
            <br />< br />
            <Navbar />
            <Routes>
              
             <Route exact path='/home' element = { <Home />} > </Route>
             <Route path ='/about' element = {<About />} > </ Route>     
             <Route path ='/menu' element = {<Menu />} > </ Route>  
             <Route path ='/contact' elment ={ <Contact />} > </ Route>
             <Route path ='/Order' element ={ <Order />}> </Route>
             </Routes>
              </div>
    )
}
export default App; 
