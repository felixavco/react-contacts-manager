import React, { Component } from "react";
import { Consumer } from '../../context';

export class ContactSide extends Component {

  handleContactInfo = (contact) => {

  }

  render() {

    return (
      <Consumer>
        { value => {
          const { contacts } = value;
          const sorted = contacts.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else {
              return -1;
            }
          });
          return (
            <ul className="list-group">
              {sorted.map(contact => (
                <li 
                onClick={() => this.handleContactInfo(contact)}
                className="list-group-item pointer" key={contact.id}>
                  <h5 className="text-center">{contact.name}</h5>
                </li>
              ))}
            </ul>
          );
        }}
      </Consumer>
    )
  }
}

export default ContactSide;
