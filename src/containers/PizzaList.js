import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  constructor(props){
    super()
  }

  renderPizzas = () => {
    return Array.from(this.props.pizzaList).map((pizza,index) => <Pizza pizza={pizza} handleEdit={this.props.handleEdit} key={index} dataid={index} />)
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
            {this.renderPizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
