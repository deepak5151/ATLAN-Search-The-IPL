import React, { Component } from 'react'
import "./App.css";

export default class Home extends Component {

    gotohome = () => {
        window.location = "/"
    }
    render() {
        return (
            <header className="Atlan-header">
                <h2 onClick={this.gotohome}>ATLAN-Search the IPL </h2>
            </header>
        )
    }

}

