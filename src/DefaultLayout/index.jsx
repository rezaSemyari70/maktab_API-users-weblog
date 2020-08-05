import React from 'react'
import Footer from './Footer';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Container} from 'reactstrap';
import ListUsers from '../Views/ListUsers/ListUsers';
import SingleUser from '../Views/SingleUser/SingleUser';
import PostArchive from '../Views/PostArchive/PostArchive';
import PostSingle from '../Views/PostSingle/PostSingle';



function index() {
    return (
        <Router>
            <Header/>
            <Container fluid>
                <Switch>
                    <Route path="/users/:id">
                        <SingleUser/>
                    </Route>
                    <Route path="/posts/:id">
                        <PostSingle/>
                    </Route>
                    <Route exact path="/posts">
                        <PostArchive/>
                    </Route>
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