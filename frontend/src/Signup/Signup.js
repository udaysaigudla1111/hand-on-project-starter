





import React from "react";
import Navitem from "../nav/navitem";
import Dash2 from "../Dashboard/Dash2/Dash2";
import Dash1 from "../Dashboard/Dashboard";

// import Navsection from './pages/Navsection/Navsection';

// import Allapi from './pages/Allapi/Allapi';
// import Template from './pages/Template/Template';

const Signup = () => {
  return (
    <div>
      <Navitem></Navitem>
      <Dash1 />
      <Dash2 />
    </div>

    /*} <Switch>
          <Route path="/about">
          <Navsection></Navsection>
           <Template></Template>
           <Allapi></Allapi>
          </Route>
        </Switch> */
  );
};

export default Signup;
