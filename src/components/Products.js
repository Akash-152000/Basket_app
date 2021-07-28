import React, { Component } from 'react';
import Card from './Card';
import "./css/products.css"
import fruit from '../Data/fruitData'
import vegetable from '../Data/vegetableData'

class Products extends Component {

    constructor(props){
        super(props)
        this.state={
            fruits : fruit,
            vegtables:vegetable
        }
        
    }

    render() {
        return (
            <div className="product">
                <div className="fruits">
                    <ul className="hs full">
                        {this.state.fruits.map(item =>(
                            <li className="item"><Card key={item.name} name={item.name} logo={item.logo} price={item.price}/></li>
                        ))}
                    </ul>
                </div>
                <div className="fruits">
                    <ul className="hs full">
                        {this.state.vegtables.map(item =>(
                            <li className="item"><Card key={item.name} name={item.name} logo={item.logo} price={item.price}/></li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Products;