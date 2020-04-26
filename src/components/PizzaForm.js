import React from "react"

const PizzaForm = props => {
  return(
    <form onSubmit={props.handleSubmit} data-id={props.dataid}>
  <label>Pizza Topping:</label>
  <input type="text" id="topping" name="topping" placeholder="Pizza Topping" onChange={props.handleChange} name="topping" value={props.pizza.topping} />
  <select value={props.pizza.Vegitarian} className="form-control" name="Vegitarian" onChange={props.handleChange}>
         <option value="Vegitarian">Vegitarian</option>
         <option value="Non Vegitarian">Non Vegitarian</option>
  </select>
  <select value={props.pizza.size} className="form-control" name="size" onChange={props.handleChange}>
        <option value="Small">Small</option>
         <option value="Medium">Medium</option>
        <option value="Large">Large</option>
       </select>
       <button type="submit" name="submit" value="submit">Submit</button>
</form>
    // <form>
    // <input type="text" className="form-control" placeholder="Pizza Topping" onChange={props.handleChange} name="topping" value={props.pizza.topping} />
    // <select value={props.pizza.size} className="form-control" name="size" onChange={props.handleChange}>
    //       <option value="Small">Small</option>
    //       <option value="Medium">Medium</option>
    //      <option value="Large">Large</option>
    //     </select>
    //   <input className="form-check-input" type="radio" value={props.pizza.Vegitarian} checked={props.pizza.Vegitarian} name="Vegitarian" onChange={props.handleChange}/>
    //   <label className="form-check-label">
    //            Vegetarian
    //          </label>
    // </form>

    // <form onClick={props.handleSubmit} data-id={props.dataid}>
    //   <div className="form-row">
    //     <div className="col-5">
    //         <input type="text" className="form-control" placeholder="Pizza Topping" onChange={props.handleChange} name="topping" value=
    //             {props.pizza.topping}
    //
    //           />
    //     </div>
    //     <div className="col">
    //       <select value={props.pizza.size} className="form-control" name="size" onChange={props.handleChange}>
    //         <option value="Small">Small</option>
    //         <option value="Medium">Medium</option>
    //         <option value="Large">Large</option>
    //       </select>
    //     </div>
    //     <div className="col">
    //       <div className="form-check">
    //         <input className="form-check-input" type="radio" checked={props.pizza.Vegitarian} name="Vegitarian" onChange={props.handleChange}/>
    //         <label className="form-check-label">
    //           Vegetarian
    //         </label>
    //       </div>
    //       <div className="form-check">
    //         <input className="form-check-input" type="radio" checked={props.pizza.NonVegitarian} name="NonVegetarian" onChange={props.handleChange}/>
    //         <label className="form-check-label">
    //           Not Vegetarian
    //         </label>
    //       </div>
    //     </div>
    //     <div className="col">
    //       <button type="submit" className="btn btn-success">Submit</button>
    //     </div>
    //   </div>
    // </form>
  )
}

export default PizzaForm
