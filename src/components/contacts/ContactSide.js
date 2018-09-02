import React, { Component } from "react";
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';

export class ContactSide extends Component {

  handleContactInfo = (contact, dispatch) => {
    dispatch({type: 'SINGLE_CONTACT', payload: contact})
  }

  render() {

    return (
      <Consumer>
        { value => {
          const { contacts, dispatch } = value;
          const sorted = contacts.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else {
              return -1;
            }
          });
          if(contacts.length){
            return (
              <ul className="list-group">
                {sorted.map(contact => ( 
                 
                 <Link exact to="/" className="font-weight-normal text-secondary">
                    <li 
                      key={contact.id}
                      onClick={() => this.handleContactInfo(contact, dispatch)}
                      className="list-group-item contact-list-side pointer d-flex justify-content-between">
                      
                        <h5>{contact.name}</h5> 
                      
                      {/* <Link to={`/edit/${contact.id}`}><i class="fas fa-pencil-alt"></i></Link> */}
                    </li>
                  </Link>
                ))}
              </ul>
            );
          } 
        }}
      </Consumer>
    )
  }
}

export default ContactSide;
