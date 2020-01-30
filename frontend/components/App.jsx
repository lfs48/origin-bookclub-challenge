import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import Home from './home/home';
import Books from './books/booklist';
import { AuthRoute, ProtectedRoute } from './routes/routes';
import {fetchBooks} from '../actions/entities/book_actions';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {dispatch(fetchBooks(), []);
    });

    return(
    <main id="app-container">
        <Navbar/>
        <ProtectedRoute path="/books" component={Books} />
        <ProtectedRoute path="/home" component={Home} />
        <AuthRoute path="/" component={Splash} />
    </main>
    );
};

export default App;