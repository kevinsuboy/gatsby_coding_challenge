import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import StockContainer from './stock/stock_container';

const App = () => (
    <div className="app-container">
        <header id="global-header">
            {/* <Route path="/" component={NavBarContainer} /> */}
        </header>
        <Switch>
            <Route exact path="/" component={StockContainer} />
        </Switch>
        <footer id="global-footer">
            {/* <Route path="/" component={FooterContainer} /> */}
        </footer>
    </div>
);

export default App;
