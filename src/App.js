import React, { Component } from 'react';
import './App.css';
import logo from './basket.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import Products from './components/Products';
import Basket from './components/Basket';
import dollar from './components/dollar.png'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
        myBasket:[],
        items:[],
        click:false,
        price:0
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleClick2=this.handleClick2.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.deleteBasket = this.deleteBasket.bind(this)
  }


  handleClick=(name,price)=>{
    this.setState({
        myBasket:[...this.state.myBasket,{name:name,price:price}],
    })
    this.setState({
      items:[...this.state.items,name]
    })
    this.setState({
      price:this.state.price+price
    })
  }

  handleClick2 =()=>{
    this.setState({
      click:!this.state.click
    })
  }

  deleteItem = (arr,val) =>{
    console.log("clicked",arr,val);
        let index = arr.indexOf(val);
        if(index >-1){
            arr.splice(index,1);
        }
        this.setState({
          items:arr
        })
        this.setState({
          price:this.state.price - this.state.myBasket.find(x=>x.name===val).price
        })
  }

  deleteBasket = () =>{
    console.log("delete it")
    this.setState({
      myBasket:[],
      items:[]
    })
  }

  render() {
    return (
          <div className="App">
            <div className="header">
              <h1>Basket</h1>  
              <img src={logo} alt="Logo" onClick={this.handleClick2}/>
            </div>
            <div >
                    {this.state.myBasket.length>0?
                      <div>
                        <p> {this.state.items.length==0?<p></p>:<p className="ping">{this.state.items.length}</p>}</p>
                        <p >{this.state.price==0?<p></p>:<p className="total_price"><img src={dollar}/>{this.state.price}</p>}</p>
                      </div>
                        :<p></p>
                    }
                    
            </div>
            <div>
              {this.state.click?
                <Basket items={this.state.items} deleteItem={this.deleteItem} deleteBasket={this.deleteBasket}/>
                :<p></p>
              }
            </div>
            <div className="products">
                <Products handleClick={this.handleClick}/>
            </div>
          <div className="footer">
            <img src={facebook} alt="Facebook"/>
            <img src={instagram} alt="Instagram"/>
            <img src={twitter} alt="Twitter"/>
          </div>
        </div>
    );
  }
}

export default App;
