import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Helmet } from "react-helmet";

export default class Home extends Component {

    render() {
        return (
            <div className="Atlan-body">
                <Helmet>
                    <title>ATLAN-Search The IPL</title>
                </Helmet>
                <div className="Atlan-body-content">
                    <h1>Welcome to ATLAN-Search the IPL!!</h1>
                    <h2>What do you want to searh today?</h2>
                    <Nav.Link as={Link} to="/Players">Players</Nav.Link>
                    <Nav.Link as={Link} to="/Teams">Teams</Nav.Link>
                    <Nav.Link as={Link} to="/Owners">Owners</Nav.Link>
                    <Nav.Link as={Link} to="/Venues">Venues</Nav.Link>
                </div>
            </div>
        )
    }

}
