import React from "react";

function Product({price, image, title, redtitle}) {
    return  (
        <article className="article">
            <span className="article.span">{redtitle}</span>
            <img src={image} alt='tas' />
            <p className="article.p">{title}</p>
            <h4 className="h4">{price}</h4>
        </article>
    );
}

export default Product;

// Lorem.