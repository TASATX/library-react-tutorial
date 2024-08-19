import React from "react";
import Book from "./ui/Book";
import {books} from '../data';

const Featured = (id) => { 
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter((book) => book.rating === 5 && +book.id !== +id)
                        .slice(0, 4)
                        .map(book =><Book book={book} key={book.id} />
                            )}
                    </div>    
                </div>
            </div>
        </section>
    );
}

export default Featured; 