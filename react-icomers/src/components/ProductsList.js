import React from "react";

const ProductListItem = (props) => {
    return <div>
        <div>Name: {props.product.name}</div>
        <div>Price: {props.product.price}</div>
        <button type="button"
                onClick={()=>{props.addToCard(props.product);}}
        >add to card</button>
    </div>;
};

const ProductList = (props) => {
    const products = props.products.map((product) => {
        // return <ProductListItem
        //     product={product}
        //     addToCard={props.addToCard}
        // />
    });
    return <div>
        {products}
    </div>;
};

export default ProductList;