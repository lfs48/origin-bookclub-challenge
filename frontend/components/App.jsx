import React from 'react';
import {Route} from 'react-router-dom';
import Splash from './splash/splash';

const App = () => (
    <main id="app-container">
        <Route path="/" component={Splash} />
    </main>
);

export default App;