import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFlights, fetchFlightsCities, deleteFligth } from '../../actions/flightsActions';

import Scoreboard from '../../components/scoreboard';
import CountAllFlights from '../../components/countAllFlights';
import CountDelayFlights from '../../components/countDelayFlights';
import Filter from '../../components/filter';

class TableContent extends Component {
    componentWillMount() {
        this.props.fetchFlights();
        this.props.fetchFlightsCities();
    }

    render() {
        const flightses = this.props.flights,
            filters = [
                { departure_city: 'город вылета' },
                { arrival_city: 'город прилёта' }
            ],
            cities = this.props.cities,
            isAdmin = this.props.isAdmin || false;

        if (!flightses) {
            return <p>Загрзука...</p>
        }

        return (
            <div>
                <Filter filters={ filters }
                        onFilterChange={ this.props.fetchFlights }
                        cities={ cities } />
                <Scoreboard flights={ flightses }
                            isAdmin={ isAdmin }
                            onDeleteFlight={ this.props.deleteFligth }
                            onCitiesChange={ this.props.fetchFlightsCities } />
                <CountAllFlights flights={ flightses } />
                <CountDelayFlights flights={ flightses } />
            </div>
        );
    }
}

TableContent.propTypes ={
    isAdmin: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        flights: state.flights.all,
        cities: state.flights.cities
    }
}

export default connect(mapStateToProps, { fetchFlights, fetchFlightsCities, deleteFligth })(TableContent);