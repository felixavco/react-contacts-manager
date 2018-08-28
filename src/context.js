import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

      case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Camila Avelar",
        email: "camila@gmail.com",
        phone: "5555-5555"
      },
      {
        id: 2,
        name: "Carlos Ayala",
        email: "cayala@gmail.com",
        phone: "3333-5555"
      },
      {
        id: 3,
        name: "Brenda Marroquin",
        email: "brenda@gmail.com",
        phone: "9999-9999"
      },
      {
        id: 4,
        name: "Felix Avelar",
        email: "felixavco@gmail.com",
        phone: "7777-7777"
      },
      {
        id: 5,
        name: "Federico Lozano",
        email: "flozano@gmail.com",
        phone: "8888-2222"
      },
      {
        id: 6,
        name: "Denis Avelar",
        email: "davelar@gmail.com",
        phone: "5555-7777"
      },
      {
        id: 7,
        name: "Eduardo Lopez",
        email: "elopez@gmail.com",
        phone: "5555-3333"
      },
      {
        id: 8,
        name: "Alberto Castro",
        email: "acastro@gmail.com",
        phone: "3333-7777"
      },
      {
        id: 9,
        name: "Ana Cevallos",
        email: "acevallos@gmail.com",
        phone: "9999-5555"
      }
    ],

    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
