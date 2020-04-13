import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderNav from "./containers/HeaderNav/HeaderNav";

import Home from "./containers/Home/Home";
import { Watch } from "./containers/Watch/Watch";
import { AppLayout } from "./components/AppLayout/AppLayout";
function App() {
  return (
    <>
      <AppLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/watch' component={Watch} />
        </Switch>
      </AppLayout>
    </>
  );
}

export default App;
