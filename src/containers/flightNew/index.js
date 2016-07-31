import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createFligth } from '../../actions/flightsActions';
import FlightForm from '../flightForm';

import './styles.scss'

class FlightNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createFligth(props)
            .then(() => {
                this.context.router.push('/admin');
            });
    }

    render() {
             return (
                 <div>
                     <h3>Добавить новый рейс</h3>
                     <FlightForm onSubmitEvent={ this.onSubmit.bind(this) }
                                 submitBtnClass='btn btn-primary'
                                 submitBtnText='Добавить'
                                 onBackBtn={'/admin'} />
                 </div>
        );
    }
}

export default connect(null, { createFligth })(FlightNew);