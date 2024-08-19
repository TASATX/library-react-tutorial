
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
    const [img, setImg] = useState(null);
    const mountedRef = useRef(true)
    
    useEffect(() => {
        console.log("Book data:", book);

        if (!book || !book.url) {
            console.error("Invalid book data or missing URL:", book);
            return;
        }

        const image = new Image();
        image.src = book.url;
        image.onload = () => {
           setTimeout(() => {
            if  (mountedRef.current) { 
            setImg(image);
            }
           }, 600);
        };
        return () => {
            mountedRef.current = false;
        };
    });
        

    return (
        <div className="book">
            {img ? (
              <>
                <Link to={`/books/${book.id}`} >
                    <figure className="book__img--wrapper">
                        <img 
                        src={img.src} 
                        alt="" 
                        className="book__img"
                        />
                    </figure>
                </Link>
                <div className="book__title">
                    <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                    </Link>
                </div>
                <Rating rating={book.rating} />
                <Price 
                salePrice={book.salePrice} 
                originalPrice={book.originalPrice}
                />
              </>
            ) : (
                <>
                <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
                </>
            )}
        </div>    
    );
}

export default Book;