import './app.scss'
import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import Header from './header'
import NewsFeed from './newsfeed';

const App = () => (
    <div className="app-container">
        <header id="global-header">
            <Route path="/" component={Header} />
        </header>
        <Switch>
            <Route exact path="/" component={NewsFeed} />
        </Switch>
        <footer id="global-footer">
            {/* <Route path="/" component={FooterContainer} /> */}
        </footer>
    </div>
);

export default App;
