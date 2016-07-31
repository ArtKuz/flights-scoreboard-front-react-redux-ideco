import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchFligth, deleteFligth, putFligth } from  '../../actions/flightsActions';
import FlightForm from '../flightForm';

class FlightShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchFligth(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deleteFligth(this.props.params.id);
        setTimeout(() => {
            this.context.router.push('/admin');
        }, 500);
    }

    onSubmit(id, props) {
        this.props.putFligth(id, props)
            .then(() => {
                this.context.router.push('/admin');
            });
    }

    render() {
        if (!this.props.flight) {
            return <div>Загрузка...</div>
        }

        return (
            <div>
                <button className='btn btn-danger pull-xs-right'
                        onClick={this.onDeleteClick.bind(this)}>
                    Удалить рейс
                </button>
                <h3>Внести изменения в рейс { this.props.flight.race_number }</h3>
                <FlightForm initialValues={ this.props.flight }
                            id = { this.props.params.id }
                            onSubmitEvent={ this.onSubmit.bind(this) }
                            submitBtnClass='btn btn-success'
                            submitBtnText='Обновить'
                            onBackBtn={'/admin'} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        flight: state.flights.flight
    }
}

export default connect(mapStateToProps, { fetchFligth, deleteFligth, putFligth })(FlightShow);