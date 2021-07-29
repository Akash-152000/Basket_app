import React, { Component } from 'react';

class Basket extends Component {
    render() {
        return (
            <div className="basket">
                {this.props.myBasket.map(item=>(
                    <li>{item.name}</li>
                ))}
            </div>
        );
    }
}

export default Basket;