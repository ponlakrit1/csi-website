import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory} from '@version/react-router-v3';

import Home from './components/home';
import About from './components/about';
import Activity from './components/activity';
import Quota from './components/quota';
import Talent from './components/it-talent';
import Contact from './components/contact';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/activity" component={Activity}></Route>
        <Route path="/quota" component={Quota}></Route>
        <Route path="/it-talent" component={Talent}></Route>
        <Route path="/contact" component={Contact}></Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
