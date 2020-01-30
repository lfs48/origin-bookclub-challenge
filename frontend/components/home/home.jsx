import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    return(
        <section id="home-container">
            <header>Origin Bookclub</header>
            <Link to="/books">Browse Books</Link>
            <button>Favorites</button>
        </section>
    );
}

export default Home;