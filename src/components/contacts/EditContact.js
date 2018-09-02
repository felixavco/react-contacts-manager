import React, { Component } from "react";
import { Consumer } from "../../context";
import InputGroup from "../layout/InputGroup";
import axios from 'axios'

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    website: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const {name, email, phone, website} = res.data;

    this.setState({
      name,
      email,
      phone,
      website
    })
  }

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

    const UpdatedContact = {
      name, 
      email,
      phone, 
      website
    }

    const { id } = this.props.match.params;

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, UpdatedContact);

    dispatch({type: 'UPDATE_CONTACT', payload: res.data})

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
              <div className="card-header"><h3 className="text-center">Edit Contact &nbsp; <i class="fas fa-user-edit"></i></h3></div>
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
                    Update Contact
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

export default EditContact;
