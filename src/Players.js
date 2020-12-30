import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import "./App.css";
import Players_Data from './Players.json'
import { Helmet } from "react-helmet";

export default class Players extends Component {

    state = {
        checkedcatall: true,
        checkedAverageall: true,
        checkedhumidall: true,
        checkednumberofballsall: true,
        checkedtotalrunsall: true,
        checkednumberofouts: true,
        StrikeRates: [
            { id: 1, value: "10-50", checked: true },
            { id: 2, value: "50-100", checked: true },
            { id: 3, value: "100-150", checked: true },
            { id: 4, value: "150-200", checked: true },
            { id: 5, value: "200+", checked: true },
        ],
        Average: [
            { id: 12, value: "10-20", checked: true },
            { id: 13, value: "20-30", checked: true },
            { id: 14, value: "30-40", checked: true },
            { id: 15, value: "40-50", checked: true },
            { id: 16, value: "50+", checked: true },
        ],
        Total_Runs: [
            { id: 17, value: "0-500", checked: true },
            { id: 18, value: "500-1000", checked: true },
            { id: 19, value: "1000-1500", checked: true },
            { id: 20, value: "1500-2000", checked: true },
            { id: 21, value: "2000-2500", checked: true },
            { id: 22, value: "2500+", checked: true },
        ],
        Number_of_balls: [
            { id: 23, value: "0-500", checked: true },
            { id: 24, value: "500-1000", checked: true },
            { id: 25, value: "1000-1500", checked: true },
            { id: 26, value: "1500-2000", checked: true },
            { id: 27, value: "2000-2500", checked: true },
            { id: 28, value: "2500+", checked: true },
        ],
        Number_of_outs: [
            { id: 29, value: "0-10", checked: true },
            { id: 30, value: "10-20", checked: true },
            { id: 31, value: "20-30", checked: true },
            { id: 32, value: "30-40", checked: true },
            { id: 33, value: "40-50", checked: true },
            { id: 34, value: "50+", checked: true },
        ],
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
                    <title>Search The IPL-Players</title>
                </Helmet>
                <div className="atlan-display-buttons">
                    <Nav.Link style={{ backgroundColor: "rgb(132 139 152)" }} as={Link} to="/Players">Players</Nav.Link>
                    <Nav.Link as={Link} to="/Teams">Teams</Nav.Link>
                    <Nav.Link as={Link} to="/Owners">Owners</Nav.Link>
                    <Nav.Link as={Link} to="/Venues">Venues</Nav.Link>
                </div>
                <Container>
                    <Row>
                        <Col sm="6" lg="3" xs="12" className="mx-auto mt-2">
                            <br />
                            <Card>
                                <Card.Header>
                                    Strike Rate
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
                                    Average
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
                                    Total_Runs
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
                                    Total Number of Balls Played
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
                                    Total Number of Outs
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
                        <Col sm="6" lg="9" xs="12" className="atlan-display-players">
                            <div className="col-lg-12">
                                {Players_Data.map((player, i) => {
                                    return (
                                        <div key={i} className=" col-lg-4 col-md-12 col-sm-12 col-9 d-inline-flex mb-4" >
                                            <div className="atlan-player">
                                                <h3>{player.Player_Name}</h3>
                                                <p>DOB - {player.DOB}<br />Batting Hand - {player.Batting_Hand}<br /> Bowling Skill - {player.Bowling_Skill}<br />Country - {player.Country}</p>
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
