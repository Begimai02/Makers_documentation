import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./containers/Home/Home";
import DocsContextProvider from "./contexts/DocsContext";
import Header from "./containers/Header/Header";
import Admin from "./components/Admin/Admin";
import AllDocumentation from "./containers/Docs/AllDocumentation/AllDocumentation";

const Routes = () => {
  return (
    <DocsContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={AllDocumentation} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </DocsContextProvider>
  );
};

export default Routes;
