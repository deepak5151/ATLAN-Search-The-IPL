import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import "./App.css";
import Teams_Data from './Teams.json'
import { Helmet } from "react-helmet";

export default class Teams extends Component {

    state = {
        checkedcatall: true,
        checkedAverageall: true,
        checkedhumidall: true,
        checkednumberofballsall: true,
        checkedtotalrunsall: true,
        checkednumberofouts: true,
        checkedawaywinperc: true,
        StrikeRates: [
            { id: 50, value: "0-10", checked: true },
            { id: 52, value: "1-20", checked: true },
            { id: 53, value: "20-30", checked: true },
            { id: 54, value: "30-40", checked: true },
            { id: 55, value: "40+", checked: true },
        ],
        Average: [
            { id: 56, value: "0-10", checked: true },
            { id: 57, value: "10-20", checked: true },
            { id: 58, value: "20-30", checked: true },
            { id: 59, value: "30-40", checked: true },
            { id: 60, value: "40+", checked: true },
        ],
        Total_Runs: [
            { id: 61, value: "0-20", checked: true },
            { id: 62, value: "20-40", checked: true },
            { id: 63, value: "40-60", checked: true },
            { id: 64, value: "60-80", checked: true },
            { id: 65, value: "80-100", checked: true },
            { id: 66, value: "100+", checked: true },
        ],
        Number_of_balls: [
            { id: 67, value: "0-20", checked: true },
            { id: 68, value: "20-40", checked: true },
            { id: 69, value: "40-60", checked: true },
            { id: 70, value: "60-80", checked: true },
            { id: 71, value: "80-100", checked: true },
            { id: 72, value: "100+", checked: true },
        ],
        Number_of_outs: [
            { id: 73, value: "0-20", checked: true },
            { id: 74, value: "20-40", checked: true },
            { id: 75, value: "40-60", checked: true },
            { id: 76, value: "60-80", checked: true },
            { id: 77, value: "80-100", checked: true }
        ],
        Away_Win_Perc: [
            { id: 79, value: "0-20", checked: true },
            { id: 80, value: "20-40", checked: true },
            { id: 81, value: "40-60", checked: true },
            { id: 82, value: "60-80", checked: true },
            { id: 83, value: "80-100", checked: true }
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
    handleAllCheckedAway_Win_Perc = (event) => {
        let Away_Win_Perc = this.state.Away_Win_Perc
        Away_Win_Perc.forEach(item => item.checked = event.target.checked)
        this.setState({
            Away_Win_Perc: Away_Win_Perc,
            checkedawaywinperc: event.target.checked
        })
    }

    handleCheckChildElementAway_Win_Perc = (event) => {
        let Away_Win_Perc = this.state.Away_Win_Perc
        Away_Win_Perc.forEach(item => {
            if (item.value === event.target.value) {
                item.checked = event.target.checked
            }
            if (item.checked === false) {
                this.setState({ checkedawaywinperc: false })
            }
        })
        this.setState({ Away_Win_Perc: Away_Win_Perc })
    }

    render() {
        return (
            <div className="Atlan-body">
                <Helmet>
                    <title>Search The IPL-Teams</title>
                </Helmet>
                <div className="atlan-display-buttons">
                    <Nav.Link as={Link} to="/Players">Players</Nav.Link>
                    <Nav.Link style={{ backgroundColor: "rgb(132 139 152)" }} as={Link} to="/Teams">Teams</Nav.Link>
                    <Nav.Link as={Link} to="/Owners">Owners</Nav.Link>
                    <Nav.Link as={Link} to="/Venues">Venues</Nav.Link>
                </div>
                <Container>
                    <Row>
                        <Col sm="6" lg="3" xs="12" className="mx-auto mt-2">
                            <br />
                            <Card>
                                <Card.Header>
                                    Home Wins
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
                                    Away Wins
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
                                    Home Matches Played
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
                                    Away Matches Played
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
                                    Home Win Percentage
                                </Card.Header>
                                <Card.Body>
                                    <div className="pl-2">
                                        <Form.Check onChange={this.handleAllCheckedNumber_of_outs} type="checkbox" checked={this.state.checkednumberofouts} id="Select All Total_Outs" label="Select All" />
                                        {this.state.Number_of_outs.map((item, i) =>
                                            <Form.Check key={i} onChange={this.handleCheckChildElementNumber_of_outs} type="checkbox" label={item.value} {...item} />
                                        )}
                                    </div>
                                </Card.Body>

                                <Card.Header>
                                    Away Win Percentage
                                </Card.Header>
                                <Card.Body>
                                    <div className="pl-2">
                                        <Form.Check onChange={this.handleAllCheckedAway_Win_Perc} type="checkbox" checked={this.state.checkedawaywinperc} id="Select All Away Win Perc" label="Select All" />
                                        {this.state.Away_Win_Perc.map((item, i) =>
                                            <Form.Check key={i} onChange={this.handleCheckChildElementAway_Win_Perc} type="checkbox" label={item.value} {...item} />
                                        )}
                                    </div>
                                </Card.Body>

                            </Card>

                        </Col>
                        <Col sm="6" lg="9" xs="12" className="atlan-display-teams">
                            <div className="col-lg-12">
                                {Teams_Data.map((team, i) => {
                                    return (
                                        <div key={i} className=" col-lg-4 col-md-12 col-sm-12 col-9 d-inline-flex mb-4" >
                                            <div className="atlan-teams">
                                                <h3>{team.team}</h3>
                                                <p>Home Wins - {team.home_wins}<br />Away Wins - {team.away_wins}<br /> Home Matches - {team.home_matches}<br />Away Matches - {team.away_matches}<br /> Home Win Percentage - {team.home_win_percentage.toFixed(2)} <br /> Away Win Percentage - {team.away_win_percentage.toFixed(2)}</p>
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
