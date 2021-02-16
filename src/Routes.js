import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './containers/Home/Home';
import DocsContextProvider from './contexts/DocsContext';
import Header from './containers/Header/Header';
import UnderHeader from './containers/Home/UnderHeader';
import DocsDetail from './containers/Docs/DocsDetail';

const Routes = () => {
    return (
        <DocsContextProvider>
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/slider" component={UnderHeader} />
                    <Route exact path="/detail" component={DocsDetail} />
                </Switch>
            </BrowserRouter>
        </DocsContextProvider>
    );
};

export default Routes;