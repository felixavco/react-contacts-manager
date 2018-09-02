import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/layout/Header";
import ContactFull from "./components/contacts/ContactFull";
import ContactSide from "./components/contacts/ContactSide";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
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
            <div className="container main">
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path='/404'component={NotFound} />
                <div className="row">
                  <div className="col-md-4">
                    <ContactSide />
                  </div>
                  <div className="col-md-8">
                    <Switch>
                      <Route exact path="/" render = {() => <ContactFull />}/>
                      <Route exact path="/add" component={AddContact} />
                      <Route exact path="/edit/:id" component={EditContact} />
                      <Route render={() => (<Redirect to="/404" />)}/>
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
