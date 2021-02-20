import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./containers/Home/Home";
import DocsContextNewProvider from "./contexts/DocsContextNew";
import Header from "./containers/Header/Header";
import Admin from "./components/Admin/Admin";
import AllDocumentation from "./containers/Docs/AllDocumentation/AllDocumentation";
import DocsDetail from "./containers/Docs/DocsDetail";
import AdminAddTopics from "./components/Admin/AdminAddTopic/AdminAddTopics";
import DocsTopicDetail from "./containers/Docs/DocsTopicDetail";


const Routes = () => {
  return (
    <DocsContextNewProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={AllDocumentation} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/detail-new" component={DocsDetail} />
          <Route exact path="/add-topic" component={AdminAddTopics} />
          <Route exact path="/detail-topic" component={DocsTopicDetail} />
        </Switch>
      </BrowserRouter>
    </DocsContextNewProvider>
  );
};

export default Routes;
