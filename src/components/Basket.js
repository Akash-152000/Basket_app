import React, { Component } from 'react';
import './css/basket.css'
import minus from './minus.png'

class Basket extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        console.log("unique",[...new Set(this.props.items)])
        console.log("items",this.props.items)
        return (
           <div className="basket">
                {[...new Set(this.props.items)].map(item=>(
                <p><img src={minus} onClick={()=>{this.props.deleteItem(this.props.items,item)}}/>{item}  {this.props.items.filter(elem => elem === item).length}</p>
                ))}
                
            </div> 
        );
    }
}

export default Basket;
