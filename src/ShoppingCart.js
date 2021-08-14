//Join by 12:15 PM
import React, { Component } from 'react';
import Product from './Product';
import apples from "./Images/Apples.jfif";
import mangoes from "./Images/Mangoes.jfif";
import oranges from "./Images/Oranges.jfif";
import gauvas from "./Images/Gauvas.jfif";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const products = [
            {
                "name": "Apples",
                "price" : "Rs. 200",
                "quantity" :"1 Kg",
                "picture" : apples
            },
            {
                "name": "Mangoes",
                "price" : "Rs. 350",
                "quantity" :"3 Kg",
                "picture" : mangoes
            },
            {
                "name": "Oranges",
                "price" : "Rs. 45",
                "quantity" :"1 Kg",
                "picture" : oranges
            },
            {
                "name": "Gauva",
                "price" : "Rs. 60",
                "quantity" :"1 Kg",
                "picture" : gauvas
            }
        ]
        const productCards = products.map((p) => <Product product = {p}/>)
        return (
            productCards
        );
    }
}

export default ShoppingCart;