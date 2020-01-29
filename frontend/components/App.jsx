import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';

const App = () => (
    <main id="app-container">
        <Navbar/>
        <Route path="/" component={Splash} />
    </main>
);

export default App;