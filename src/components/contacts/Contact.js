import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    onShow: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id})
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { onShow } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 w-75">
              <div className="d-flex justify-content-between align-items-center">
                <h4
                  onClick={() => this.setState({ onShow: !this.state.onShow })}
                  className="card-title pointer"
                >
                  {name}
                </h4>

                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-info btn-sm">
                    <i className="fas fa-pencil-alt" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onDeleteClick(id, dispatch)}
                  >
                    <i className="fas fa-trash" />
                  </button>
                </div>
              </div>
              {onShow ? (
                <ul className="list-group">
                  <li className="list-group-item text-center">
                  <a href={`mailto:${email}`}>
                  {email}
                  </a>
                  </li>
                  <li className="list-group-item text-center">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
