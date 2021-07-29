import React, { Component } from 'react';
import './css/card.css';
import dollar from "./dollar.png"
import add from "./plus.png"

class Card extends Component {

    constructor(props){
        super(props)
        this.state={
        }
    }
    render() {
        return (
            <div className="Card">
                <img className="logo" src={this.props.logo} alt="Icons"/>
                <p className="name">{this.props.name}</p>
                <div className="amount">
                    <img className="dollar" src={dollar} alt="Dollar"/>
                    <p className="price">{this.props.price}</p>
                </div>
                <img className="add" src={add} alt="add item" onClick={()=>{this.props.handleClick(this.props.name,this.props.price)}}/>
            </div>
        );
    }
}

export default Card;
