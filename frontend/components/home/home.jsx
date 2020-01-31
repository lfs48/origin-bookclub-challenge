import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBookOpen, faBookMedical, faHeart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    return(
        <section id="home-container">
            <ul>
                <li>
                    <FontAwesomeIcon className="fa" icon={faBookOpen} />
                    <Link className="home-link" to="/books">Browse Books</Link>
                </li>
                <li>
                    <FontAwesomeIcon className="fa" icon={faBookMedical} />
                    <Link className="home-link" to="/create_book">Add a Book</Link>
                </li>
                <li>
                    <FontAwesomeIcon className="fa" icon={faHeart} />
                    <Link className="home-link" to="/favorites">Your Favorites</Link>
                </li>
            </ul>
        </section>
    );
}

export default Home;