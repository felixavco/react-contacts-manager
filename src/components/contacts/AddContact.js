import React, { Component } from "react";
import { Consumer } from "../../context";
import InputGroup from "../layout/InputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmitHandler = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

     //Check for Errors
     if(name === ''){
      this.setState({errors: {name: 'Name is required'}})
      return false
    }

    if(email === ''){
      this.setState({errors: {email: 'Email is required'}})
      return false
    }

    if(phone === ''){
      this.setState({errors: {phone: 'Phone is required'}})
      return false
    }

    const newContact = {
      id: new Date().getTime(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, phone, errors } = this.state;
  
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 w-75">
              <div className="card-header"><h3 className="text-center">Add Contact</h3></div>
              <div className="card-body">
                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                  <InputGroup
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.onChangeHandler}
                    placeholder="Enter Name..."
                    error={errors.name}
                  />

                  <InputGroup
                    label="Email"
                    name="email"
                    value={email}
                    onChange={this.onChangeHandler}
                    placeholder="Enter Email..."
                    type="email"
                    error={errors.email}
                  />

                  <InputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={this.onChangeHandler}
                    placeholder="Enter Phone..."
                    error={errors.phone}
                  />

                  <button type="submit" className="btn btn-info btn-block">
                    Add Contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
