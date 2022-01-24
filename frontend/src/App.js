






 import Dashboardd from './Dashboardd/Dashboardd';
import Signup from './Signup/Signup';
  import Loogin from './Loogin/Loogin'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return <div>
   <Router>
      <Switch>
      <Route exact path="/dashboard"><Dashboardd></Dashboardd></Route>
      <Route exact path="/"> <Loogin/> </Route>
      <Route exact path="/signup">  <Signup></Signup> </Route>
    
       
      </Switch>  
    
    </Router>
   
 
   {/*} <Dashboardd/> */}
  </div>;
};

export default App;
