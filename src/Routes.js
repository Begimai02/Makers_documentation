import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './containers/Home/Home';
import DocsContextProvider from './contexts/DocsContext';
import Header from './containers/Header/Header';
import DocsDetail from './containers/Docs/DocsDetail';
import Admin from './components/Admin/Admin';

const Routes = () => {
    return (
        <DocsContextProvider>
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail" component={DocsDetail} />
                    <Route exact path="/admin" component={Admin} />
                </Switch>
            </BrowserRouter>
        </DocsContextProvider>
    );
};

export default Routes;