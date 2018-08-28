import React, { Component } from 'react'

class ContactFull extends Component {
  render() {
    const {name, email, phone, company, website, address } = this.props
    return (
      <div className="card">
        <div className="card-body">
        <h4 class="card-title py-3 text-center">{name}</h4>
          <ul className="list-group">
            <li className="list-group-item"><strong>Email:</strong> <a href="mailto:felix@gmail.com" target="_blank"> {email}</a></li>
            <li className="list-group-item"><strong>Phone:</strong> <a href="tel:50375632155254" target="_blank"> {phone}</a></li>
            {/* <li className="list-group-item"><strong>Company:</strong> {company}</li>
            <li className="list-group-item"><strong>Website:</strong> <a href="#" target="_blank"> {website}</a></li>
            <li className="list-group-item"><strong>Address:</strong> {address}</li> */}
          </ul>
        </div>
      </div>
    )
  }
}

// ContactFull.defaultProps = {
//  contact = {
//    name: '',
//    email: '',
//    phone: ''
//  }
// }

export default ContactFull
