import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

const App = () => (
    <div className="app-container">
        <header id="global-header">
            {/* <Route path="/" component={NavBarContainer} /> */}
        </header>
        <Switch>
        </Switch>
        <footer id="global-footer">
            {/* <Route path="/" component={FooterContainer} /> */}
        </footer>
    </div>
);

export default App;
