import React from 'react'
import Navitem from './nav/navitem';
import Dash2 from './Dashboard/Dash2/Dash2';
import Dash1 from './Dashboard/Dashboard';
import Navsection from './pages/Navsection/Navsection';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";



  import Allapi from './pages/Allapi/Allapi';
import Template from './pages/Template/Template';
const App = () => { 
    return (
        <Router>    
        <div>
        <Navitem></Navitem>
          <Switch>
    <Route exact path="/">
<Dash1/>
<Dash2 />
      </Route>       
      
    
    </Switch>  
        </div>
        <Switch>
          <Route path="/about">
          <Navsection></Navsection>
           <Template></Template>
           <Allapi></Allapi>
          </Route>
        </Switch>
        </Router>
    )
}

export default App
