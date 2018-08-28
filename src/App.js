import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
// import Contacts from "./components/contacts/Contacts";
import ContactFull from "./components/contacts/ContactFull";
import ContactSide from "./components/contacts/ContactSide";
import AddContact from "./components/contacts/AddContact";
import About from './components/layout/About';
import NotFound from './components/layout/NotFound';

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="React Contacts Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/404" component={NotFound} />

                <div className="row">
                  <div className="col-md-4">
                    <ContactSide />
                  </div>
                  <div className="col-md-8">
                    <Switch>
                      <Route exact path="/" render = {() => <ContactFull contact={console.log("HOLA")} />}/>
                      <Route exact path="/add" component={AddContact} />
                    </Switch>
                  </div>
                </div>

              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
