import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(props){
    super()
    this.state = {
      pizzas: '',
      pizzatoEdit: '',
      pizzaForm: {
        topping: '',
        size: 'Small',
        Vegitarian: 'Vegitarian'
      }
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fetchPizzas = () => {
    fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(Object.assign({},this.state,{pizzas: data}))
      });
  }

  updatePizzas = index => {
    console.log('index', index);
    const pizzatoedit = {
      id: index,
      topping: this.state.pizzaForm.topping,
      size: this.state.pizzaForm.size,
      Vegetarian: this.state.pizzaForm.Vegitarian
    }
    let newarr = this.state.pizzas;
    newarr[index] = pizzatoedit;
    this.setState(
      Object.assign({}, this.state,
      {pizzas: newarr})
    );
    console.log(this.state);
    console.log('pizzatoedit', pizzatoedit)
    const configObj = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        id: index,
        topping: this.state.pizzaForm.topping,
        size: this.state.pizzaForm.size,
        Vegetarian: this.state.pizzaForm.Vegitarian
      })
    }
    fetch('http://localhost:3000/pizzas',configObj)
      .then(response => console.log(response.json()))
      .then(data => {
        console.log(data)
        this.resetForm();
      });
  }

  handleEdit = event => {
    const index = event.target.dataset.id;
    console.log('Edit Index:', index);
    const newState = this.state;
    newState.pizzatoEdit = index;
    this.setState(newState);
    console.log(this.state);
    const newPizza = this.state.pizzas[index];
    const newPizzaForm = {
      topping: newPizza.topping,
      size: newPizza.size,
      Vegitarian: newPizza.vegetarian ? 'Vegitarian' : 'Non Vegitarian'
    }
    console.log(newPizzaForm);
    this.setState(Object.assign({},this.state,{pizzaForm: newPizzaForm}))
  }

  handleSubmit = event => {
    console.log(event.target);
    event.preventDefault();
    this.updatePizzas(event.target.dataset.id);
  }

  currentPizza = () => {
    const p = this.state.pizzatoEdit;
    return p ? Array.from(this.state.pizzas)[p] : -1;
  }

  handleChange = event => {
    this.setState(Object.assign({},this.state,
        {pizzaForm: Object.assign({},this.state.pizzaForm,
          {[event.target.name]: event.target.value})}));
  }
  componentDidMount(){
    this.fetchPizzas();
  }

  resetForm = () => {
    this.setState(Object.assign({},this.state,
      {pizzaForm: {
        topping: '',
        size: 'Small',
        Vegitarian: 'Vegitarian'
      }
    }))
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} pizza = {this.state.pizzaForm} dataid={this.state.pizzatoEdit} handleChange={this.handleChange}/>
        <PizzaList pizzaList = {this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
