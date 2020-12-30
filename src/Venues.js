import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import "./App.css";
import Venues_Data from './Venues.json'
import { Helmet } from "react-helmet";

export default class Venues extends Component {

    state = {
        checkedcatall: true,
        checkedAverageall: true,
        checkedhumidall: true,
        checkednumberofballsall: true,
        checkedtotalrunsall: true,
        checkednumberofouts: true,
        StrikeRates: [
            { id: 50, value: "0-1000", checked: true },
            { id: 52, value: "1000-2000", checked: true },
            { id: 53, value: "2000-3000", checked: true },
            { id: 54, value: "3000-4000", checked: true },
            { id: 55, value: "4000+", checked: true },
        ],
        Average: [
            { id: 56, value: "0-100", checked: true },
            { id: 57, value: "100-200", checked: true },
            { id: 58, value: "200-300", checked: true },
            { id: 59, value: "300-400", checked: true },
            { id: 60, value: "400+", checked: true },
        ],
        Total_Runs: [
            { id: 61, value: "0-5", checked: true },
            { id: 62, value: "5-10", checked: true },
            { id: 63, value: "10-15", checked: true },
            { id: 64, value: "15-20", checked: true },
            { id: 65, value: "20-25", checked: true },
            { id: 66, value: "25+", checked: true },
        ],
        Number_of_balls: [
            { id: 67, value: "0-5", checked: true },
            { id: 68, value: "5-10", checked: true },
            { id: 69, value: "10-15", checked: true },
            { id: 70, value: "15-20", checked: true },
            { id: 71, value: "20-25", checked: true },
            { id: 72, value: "25+", checked: true },
        ],
        Number_of_outs: [
            { id: 73, value: "0-5", checked: true },
            { id: 74, value: "5-10", checked: true },
            { id: 75, value: "10-15", checked: true },
            { id: 76, value: "15-20", checked: true },
            { id: 77, value: "20-25", checked: true },
            { id: 78, value: "25+", checked: true },
        ]
    }

    handleAllCheckedStrikeRate = (event) => {
        let StrikeRates = this.state.StrikeRates
        StrikeRates.forEach(item => item.checked = event.target.checked)
        this.setState({
            StrikeRates: StrikeRates,
            checkedcatall: event.target.checked
        })
    }

    handleCheckChildElementStrikeRate = (event) => {
        let StrikeRates = this.state.StrikeRates
        StrikeRates.forEach(item => {
            if (item.value === event.target.value) {
                item.checked = event.target.checked
            }
            if (item.checked === false) {
                this.setState({ checkedcatall: false })
            }
        })
        this.setState({ StrikeRates: StrikeRates })
    }
    handleAllCheckedAverage = (event) => {
        let Average = this.state.Average
        Average.forEach(item => item.checked = event.target.checked)
        this.setState({
            Average: Average,
            checkedAverageall: event.target.checked
        })
    }

    handleCheckChildElementAverage = (event) => {
        let Average = this.state.Average
        Average.forEach(item => {
            if (item.value === event.target.value) {
                item.checked = event.target.checked
            }
            if (item.checked === false) {
                this.setState({ checkedAverageall: false })
            }
        })
        this.setState({ Average: Average })
    }

    handleAllCheckedTotal_Runs = (event) => {
        let Total_Runs = this.state.Total_Runs
        Total_Runs.forEach(item => item.checked = event.target.checked)
        this.setState({
            Total_Runs: Total_Runs,
            checkedtotalrunsall: event.target.checked
        })
    }

    handleCheckChildElementTotal_Runs = (event) => {
        let Total_Runs = this.state.Total_Runs
        Total_Runs.forEach(item => {
            if (item.value === event.target.value) {
                item.checked = event.target.checked
            }
            if (item.checked === false) {
                this.setState({ checkedtotalrunsall: false })
            }
        })
        this.setState({ Total_Runs: Total_Runs })
    }

    handleAllCheckedNumber_of_balls = (event) => {
        let Number_of_balls = this.state.Number_of_balls
        Number_of_balls.forEach(item => item.checked = event.target.checked)
        this.setState({
            Number_of_balls: Number_of_balls,
            checkednumberofballsall: event.target.checked
        })
    }

    handleCheckChildElementNumber_of_balls = (event) => {
        let Number_of_balls = this.state.Number_of_balls
        Number_of_balls.forEach(item => {
            if (item.value === event.target.value) {
                item.checked = event.target.checked
            }
            if (item.checked === false) {
                this.setState({ checkednumberofballsall: false })
            }
        })
        this.setState({ Number_of_balls: Number_of_balls })
    }

    handleAllCheckedNumber_of_outs = (event) => {
        let Number_of_outs = this.state.Number_of_outs
        Number_of_outs.forEach(item => item.checked = event.target.checked)
        this.setState({
            Number_of_outs: Number_of_outs,
            checkednumberofouts: event.target.checked
        })
    }

    handleCheckChildElementNumber_of_outs = (event) => {
        let Number_of_outs = this.state.Number_of_outs
        Number_of_outs.forEach(item => {
            if (item.value === event.target.value) {
                item.checked = event.target.checked
            }
            if (item.checked === false) {
                this.setState({ checkednumberofouts: false })
            }
        })
        this.setState({ Number_of_outs: Number_of_outs })
    }

    render() {
        return (
            <div className="Atlan-body">
                <Helmet>
                    <title>Search The IPL-Venues</title>
                </Helmet>
                <div className="atlan-display-buttons">
                    <Nav.Link as={Link} to="/Players">Players</Nav.Link>
                    <Nav.Link as={Link} to="/Teams">Teams</Nav.Link>
                    <Nav.Link as={Link} to="/Owners">Owners</Nav.Link>
                    <Nav.Link style={{ backgroundColor: "rgb(132 139 152)" }} as={Link} to="/Venues">Venues</Nav.Link>
                </div>
                <Container>
                    <Row>
                        <Col sm="6" lg="3" xs="12" className="mx-auto mt-2">
                            <br />
                            <Card>
                                <Card.Header>
                                    Runs Scored
                                </Card.Header>
                                <Card.Body>
                                    <div className="pl-2">
                                        <Form.Check onChange={this.handleAllCheckedStrikeRate} type="checkbox" checked={this.state.checkedcatall} id="Select All StrikeRates" label="Select All" />
                                        {this.state.StrikeRates.map((item, i) =>
                                            <Form.Check key={i} onChange={this.handleCheckChildElementStrikeRate} type="checkbox" label={item.value} {...item} />
                                        )}
                                    </div>
                                </Card.Body>

                                <Card.Header>
                                    Wickets Taken
                                </Card.Header>
                                <Card.Body>
                                    <div className="pl-2">
                                        <Form.Check onChange={this.handleAllCheckedAverage} type="checkbox" checked={this.state.checkedAverageall} id="Select All Average" label="Select All" />
                                        {this.state.Average.map((item, i) =>
                                            <Form.Check key={i} onChange={this.handleCheckChildElementAverage} type="checkbox" label={item.value} {...item} />
                                        )}
                                    </div>
                                </Card.Body>

                                <Card.Header>
                                    Matches Tied
                                </Card.Header>
                                <Card.Body>
                                    <div className="pl-2">
                                        <Form.Check onChange={this.handleAllCheckedTotal_Runs} type="checkbox" checked={this.state.checkedtotalrunsall} id="Select All Total_Runs" label="Select All" />
                                        {this.state.Total_Runs.map((item, i) =>
                                            <Form.Check key={i} onChange={this.handleCheckChildElementTotal_Runs} type="checkbox" label={item.value} {...item} />
                                        )}
                                    </div>
                                </Card.Body>

                                <Card.Header>
                                    Number of Matches with no results
                                </Card.Header>
                                <Card.Body>
                                    <div className="pl-2">
                                        <Form.Check onChange={this.handleAllCheckedNumber_of_balls} type="checkbox" checked={this.state.checkednumberofballsall} id="Select All Number_of_balls" label="Select All" />
                                        {this.state.Number_of_balls.map((item, i) =>
                                            <Form.Check key={i} onChange={this.handleCheckChildElementNumber_of_balls} type="checkbox" label={item.value} {...item} />
                                        )}
                                    </div>
                                </Card.Body>

                                <Card.Header>
                                    Number of PlayOffs Played
                                </Card.Header>
                                <Card.Body>
                                    <div className="pl-2">
                                        <Form.Check onChange={this.handleAllCheckedNumber_of_outs} type="checkbox" checked={this.state.checkednumberofouts} id="Select All Total_Outs" label="Select All" />
                                        {this.state.Number_of_outs.map((item, i) =>
                                            <Form.Check key={i} onChange={this.handleCheckChildElementNumber_of_outs} type="checkbox" label={item.value} {...item} />
                                        )}
                                    </div>
                                </Card.Body>

                            </Card>

                        </Col>
                        <Col sm="6" lg="9" xs="12" className="atlan-display-teams">
                            <div className="col-lg-12">
                                {Venues_Data.map((venue, i) => {
                                    return (
                                        <div key={i} className=" col-lg-4 col-md-12 col-sm-12 col-9 d-inline-flex mb-4" >
                                            <div className="atlan-venues">
                                                <h3>{venue.venue}</h3>
                                                <p>No Details Available</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}
