import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./containers/Home/Home";
import DocsContextProvider from "./contexts/DocsContext";
import Header from "./containers/Header/Header";
import DocsDetail from "./containers/Docs/DocsDetail";
import Admin from "./components/Admin/Admin";
import AllDocumentation from "./containers/AllDocumentation/AllDocumentation";

const Routes = () => {
  return (
    <DocsContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={DocsDetail} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/documentation" component={AllDocumentation} />
        </Switch>
      </BrowserRouter>
    </DocsContextProvider>
  );
};

export default Routes;
