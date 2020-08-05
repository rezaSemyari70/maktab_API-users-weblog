import React from 'react'
import Footer from './Footer';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Container} from 'reactstrap';
import ListUsers from '../Views/ListUsers/ListUsers';
function index() {
    return (
        <Router>
            <Header/>
            <Container fluid>
                <Switch>
                    <Route path="/users/:id"></Route>
                    <Route path="/posts/:id"></Route>
                    <Route exact path="/posts"></Route>
                    <Route exact path="/users">
                        <ListUsers/>
                    </Route>
                    <Route exact path="/todos"></Route>
                    <Route exact path="/"></Route>
                </Switch>
            </Container>
            <Footer/>
        </Router>
    )
}

export default index