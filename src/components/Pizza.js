import React from "react"

const Pizza = props => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.Vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={props.handleEdit} data-id={props.dataid}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
