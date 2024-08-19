import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
    const scrollToFeatures = (e) => {
        e.preventDefault();
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
            <section id='landing'>
                <div className="header__container">
                    <h1>America's most awarded online library platform</h1>
                    <h2>Find your dream book with <span className='purple'>Library</span></h2>
                    <Link to="#features">
                        <button className="btn" onClick={scrollToFeatures}>Browse Books</button>
                    </Link>
                </div>
                <figure className='header__img--wrapper'>
                    <img src={UndrawBooks} alt="" />
                </figure>
            </section>
    );
}

export default Landing;