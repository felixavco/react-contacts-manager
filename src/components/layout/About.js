import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="mt-5 pt-5">
      <h2 className="display-4">About React Contacts Manager</h2>
      <p className="lead mt-3">This is a demo of a Single Page Application using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> to mange contacts, the contacts are fetch from <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a> to mimic CRUD operations; however, the data is not persisted once you reload the page the new contacts or changes will disappear, this page also use a "404 Page" to redirect all incorrect routes, please visit our <Link to="/404/">404 page.</Link> This is an open source code if you want to use it, you can visit the Github repository by clicking <a href="https://github.com/felixavco/react-contacts-manager" target="_blank" rel="noopener noreferrer">HERE.</a></p> 
      <p className="text-secondary">Version 1.0.0</p>

      <div className="d-flex justify-content-center mt-5">
        <span class="badge badge-secondary mx-2">#React</span>
        <span class="badge badge-secondary mx-2">#Bootstrap</span>
        <span class="badge badge-secondary mx-2">#JSONPlaceholder</span>
        <span class="badge badge-secondary mx-2">#Fontawesome</span>
      </div>
    </div>
  )
}

export default About
