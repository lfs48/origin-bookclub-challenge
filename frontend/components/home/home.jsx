import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    return(
        <section id="home-container">
            <header>Origin Bookclub</header>
            <Link to="/books">Browse Books</Link>
            <Link to="/create_book">Add a Book</Link>
            <Link to="/favorites">Your Favorites</Link>
        </section>
    );
}

export default Home;