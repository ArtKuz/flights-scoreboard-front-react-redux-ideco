import React, { Component, PropTypes } from 'react';
import { comparisonMore } from '../../helpers/dateTimeMoment';
import _ from 'lodash';

export default class CountDelayFlights extends Component {
    constructor(props) {
        super(props);

        this.getCount = this.getCount.bind(this);
    }

    getCount() {
        return _.compact(this.props.flights.map((flight) => {
            return comparisonMore(flight.time, flight.actual_time)
        })).length;
    }

    render() {
        return (
            <p>
                Задержанных рейсов: { this.getCount() }
            </p>
        )
    }
}

CountDelayFlights.propTypes ={
    flights: PropTypes.array.isRequired
};