import React, { Component } from "react";
import { Consumer } from "../../context";
import InputGroup from "../layout/InputGroup";
import axios from 'axios'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    website: "",
    errors: {}
  };

  onSubmitHandler = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, website } = this.state;

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

    if(website === ''){
      this.setState({errors: {phone: 'Website is required'}})
      return false
    }

    const newContact = {
      name,
      email,
      phone, 
      website
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)

    dispatch({ type: "ADD_CONTACT", payload: res.data })


    this.setState({
      name: "",
      email: "",
      phone: "", 
      website: ""
    });

    this.props.history.push('/');
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, phone, website, errors } = this.state;
  
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card-custom mb-3 no-scroll">
              <div className="card-header"><h3 className="text-center">Add Contact &nbsp; <i class="fas fa-user-plus"></i></h3></div>
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

                   <InputGroup
                    label="Website"
                    name="website"
                    value={website}
                    onChange={this.onChangeHandler}
                    placeholder="Enter your website URL"
                    error={errors.website}
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
