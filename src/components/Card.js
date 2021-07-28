import React, { Component } from 'react';
import './css/card.css';
import dollar from "./dollar.png"

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <img className="logo" src={this.props.logo}/>
                <p className="name">{this.props.name}</p>
                <div className="amount">
                    <img className="dollar" src={dollar}/>
                    <p className="price">{this.props.price}</p>
                </div>
            </div>
        );
    }
}

export default Card;