import React, { Component } from "react"
import { Consumer } from "../../context"
import { Link } from 'react-router-dom';
import axios from 'axios'

class ContactFull extends Component {

  handleDelete = async (id, dispatch) =>{
    dispatch({type: 'DELETE_CONTACT', payload: id})
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { id, name, email, phone, website } = value.singleContact
          const { dispatch, contacts } = value
          const mailto = `mailto:${email}`
          const tel = `tel:${phone}`
          if(id > 0 && name !== ''){
            return (
              <div className="card-custom no-scroll">
                <div className="card-body">
                <div className="d-flex justify-content-between my-3">
                  <h4 className="card-title">{name}</h4>
                  <div>
                  <Link to={`/edit/${id}`} >
                    <button type="button" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button>
                  </Link>
                    <button type="button" onClick={()=> this.handleDelete(id, dispatch)} className="btn btn-danger ml-1"><i className="fas fa-trash-alt"></i></button>
                  </div>
                </div>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Email:</strong> <a href={mailto}> {email}</a></li>
                    <li className="list-group-item"><strong>Phone:</strong> <a href={tel}>{phone}</a></li>
                    <li className="list-group-item"><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></li>
                  </ul>
                </div>
              </div>
            );
          } else if(!contacts.length){
            return <h3 className=" mt-5">There is no contacts to display</h3>
          } else {
            return <h3 className="text-center mt-5">Select a contact to display</h3>
          }
          
        }}
      </Consumer>
    );
  }
}


export default ContactFull;
