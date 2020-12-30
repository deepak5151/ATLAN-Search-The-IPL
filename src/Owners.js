import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Helmet } from "react-helmet";

export default class Owners extends Component {

    render() {
        return (
            <div className="Atlan-body">
                <Helmet>
                    <title>Search The IPL-Owners</title>
                </Helmet>
                <div className="atlan-display-buttons">
                    <Nav.Link as={Link} to="/Players">Players</Nav.Link>
                    <Nav.Link as={Link} to="/Teams">Teams</Nav.Link>
                    <Nav.Link style={{ backgroundColor: "rgb(132 139 152)" }} as={Link} to="/Owners">Owners</Nav.Link>
                    <Nav.Link as={Link} to="/Venues">Venues</Nav.Link>
                </div>
                <div className="Atlan-body-content">
                    <h1>Oops!!! No Data Available here..</h1>
                </div>
            </div>
        )
    }

}
