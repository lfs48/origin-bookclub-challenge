import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import Home from './home/home';
import Books from './books/booklist';
import Bookform from './books/bookform';
import Book from './books/book';
import { AuthRoute, ProtectedRoute } from './routes/routes';
import {fetchBooks} from '../actions/entities/book_actions';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {dispatch(fetchBooks(), []);
    });

    return(
    <main id="app-container">
        <Navbar/>
        <ProtectedRoute path="/edit_book/:id" component={Bookform} />
        <ProtectedRoute path="/create_book" component={Bookform} />
        <ProtectedRoute path="/favorites" component={Books} />
        <ProtectedRoute path="/books" component={Books} />
        <ProtectedRoute path="/book/:id" component={Book} />
        <ProtectedRoute path="/home" component={Home} />
        <AuthRoute path="/" component={Splash} />
    </main>
    );
};

export default App;