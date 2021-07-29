import React, { Component } from 'react';
import './App.css';
import logo from './basket.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import Products from './components/Products';
import Basket from './components/Basket';


class App extends Component {

  constructor(props){
    super(props)
    this.state={
        myBasket:[],
        click:false
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleClick2=this.handleClick2.bind(this)
  }


  handleClick=(name,price)=>{
    this.setState({
        myBasket:[...this.state.myBasket,{name:name,price:price}]
    })
  }

  handleClick2 =()=>{
    this.setState({
      click:!this.state.click
    })
  }

  render() {
    console.log(this.state.myBasket)
    return (
          <div className="App">
            <div className="header">
              <h1>Basket</h1>  
              <img src={logo} alt="Logo" onClick={this.handleClick2}/>
            </div>
            <div >
                    {this.state.myBasket.length>0?
                        <p className="ping"> {this.state.myBasket.length}</p>
                        :<p></p>
                    }
            </div>
            <div>
              {this.state.click?
                <Basket className="basket" myBasket={this.state.myBasket}/>
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
