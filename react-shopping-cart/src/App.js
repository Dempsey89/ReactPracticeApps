import React, { Component } from 'react';
import './App.css';
import Products from './components/products';
import Total from './components/total';
import Cart from './components/cart';

class App extends Component {
      state={
      products: [

        {id: 1, name: 'Brush', cost: 3, stock: 0},
        {id: 2, name: 'Shirt', cost: 25, stock: 0},
        {id: 3, name: 'Socks', cost: 1, stock: 0},
        {id: 4, name: 'Shoes', cost: 60, stock: 0},
        {id: 5, name: 'Hammer', cost: 2, stock: 0}
      ],
      total: 0,
      currentItems: []
    }

    AddItem = (index) =>{
      const total = this.state.total + this.state.products[index].cost;
      const currentItems = this.state.currentItems.slice();
      this.state.products[index].stock++;
      if(currentItems.indexOf(this.state.products[index]) === -1){
        currentItems.push(this.state.products[index]);
      }
      this.setState({
        total: total,
        currentItems: currentItems
      })        
      }

      decrementItem = (index) =>{
      const selectedInd = this.state.currentItems[index];
      const total = this.state.total - selectedInd.cost;
      this.state.currentItems[index].stock--;
      const currentItems = this.state.currentItems.slice();
      if(this.state.currentItems[index].stock < 1){
        currentItems.splice(index,1);
      }
      this.setState({
        total: total,
        currentItems: currentItems
      })        
      }

      incrementItem = (index) => {
      const selectedInd = this.state.currentItems[index];
      const total = this.state.total + selectedInd.cost;
      this.state.currentItems[index].stock++;
      this.setState({
        total: total,

      })  
      }
    

  render() {
       let products = (this.state.products.map((product, index) => {
        return  <div className="products">
                <div className="prouduct">{this.state.products[index].name}</div>
                <div className="price">${this.state.products[index].cost}</div>
                <button onClick={() =>this.AddItem(index)}>Add to Cart</button>
              </div>
      }) )

       let currentItems = 

       (this.state.currentItems.map((product, index) => {
               return <React.Fragment>
                      <div className="theItems">
                        <button onClick={() =>this.decrementItem(index)} className="currentItems">-</button>
                        <div className="currentItems">{this.state.currentItems[index].name}</div>
                        <div className="currentItems">${this.state.currentItems[index].cost}</div>
                        <div className="currentItems">x{this.state.currentItems[index].stock}</div>
                        <button onClick={() =>this.incrementItem(index)}className="currentItems">+</button>
                      </div>
                     </React.Fragment>
              }) )
       


    return (


      <div className="App">
      <Total total={this.state.total} />
       <center>{products}</center>
       <div className="cart">
        <center><h3>Your Current Items</h3>
        {currentItems.length > 0 ? currentItems : 'No Current Items'}</center>
       </div>
      </div>
    );
  }
}


export default App;
