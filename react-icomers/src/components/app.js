import React from "react";
import ProductList from "./ProductsList";
import {getAll, get, save} from "../api/products";

class App extends React.Component {
    state = {
        products: [],
        cart: [],
        page: ''
    };


    componentDidMount() {
        getAll().then(products => {
            this.setState({products});
        });

        get(2).then(product => {
            console.log('product', product);
        });

        save({
            "id": 3,
            "name": "Product 1",
            "price": 10
        }).then(products => {
            console.log('products after add', products);
        })
    }

    addToCard = (product) => {
        this.setState({
            cart: [
                ...this.state.cart,
                product
            ]
        })
    };

    changePage = (pageNumber) => {
        this.setState({
            page: <div>This is page number {pageNumber} </div>
        });
        console.log(this.state.page);
    };

    buttons() {
        return <div>
            <button type="button"
                    onClick={() => {
                        this.changePage(1);
                    }}>Page 1
            </button>
            <button type="button"
                    onClick={() => {
                        this.changePage(2);
                    }}>Page 2
            </button>
            <button type="button" onClick={() => {
                this.changePage(3);
            }}>Page 3
            </button>
        </div>
    };

    render() {
        console.log(this.state);
        return <div>
            App..
            {this.buttons()}
            {this.state.page}
            <hr/>
            <ProductList
                products={this.state.products}
                addToCard={this.addToCard}
            />
        </div>;
    }
}

export default App;