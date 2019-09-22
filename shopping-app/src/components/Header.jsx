import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
export default class Header extends Component {
    render() {
        return (
        <Router>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link to class="navbar-brand" href="#">WebSiteName</Link>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to href="#">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                    </ul>
                </div>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            </Router>
        )
    }
}
