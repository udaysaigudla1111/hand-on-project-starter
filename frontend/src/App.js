





import Myapis from '../src/pages/Myapis/Myapis';
 import Dashboardd from './Dashboardd/Dashboardd';
import Signup from './Signup/Signup';
  import Loogin from './Loogin/Loogin'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bgremove from './Dashboardd/bgremove/bgremove';
const App = () => {
  return <div>
   <Router>
      <Switch>
      <Route exact path="/"><Dashboardd></Dashboardd></Route>
      <Route exact path="/userdashboard"><Dashboardd></Dashboardd></Route>
      <Route exact path="/login"> <Loogin/> </Route>
      <Route exact path="/signup">  <Signup></Signup> </Route>
      <Route exact path="/Myapi"> <Myapis></Myapis></Route>  
      <Route exact path="/bgremove"><Bgremove></Bgremove></Route>
      </Switch>  
    
    </Router>
   
 
   {/*} <Dashboardd/> */}
  </div>;
};

export default App;
