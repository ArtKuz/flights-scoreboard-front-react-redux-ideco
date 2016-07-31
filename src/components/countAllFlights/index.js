import React, { Component, PropTypes } from 'react';

export default class CountAllFlights extends Component {
    render() {
        return (
            <p>
                Всего рейсов: { this.props.flights.length }
            </p>
        )
    }
}

CountAllFlights.propTypes ={
    flights: PropTypes.array.isRequired
};