import React, { Component } from 'react';
import './css/basket.css'
import minus from './minus.png'

class Basket extends Component {
    constructor(props){
        super(props)
        this.state={
            // items:[]
        }
    }

    render() {
        return (
            <div className="basket">
                    <p><img src={minus}/>{((JSON.stringify(this.props.items.reduce((acc, val) => {
                        acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
                        return acc;
                      }, {})).replace(/[{}]/g, '')).replace(/["]/g,'')).replace(/[,]/g,"\n")  }{"\n"}</p><br></br>
                
            </div>
        );
    }
}

export default Basket;
