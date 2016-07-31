import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import _ from 'lodash';

class FlightForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        if (this.props.id) {
            this.props.onSubmitEvent(this.props.id, props);
        } else {
            this.props.onSubmitEvent(props);
        }
    }

    render() {
        const statuses = [ 'вылетел', 'приземлился', 'идёт посадка', 'задержан' ];
        const { fields: { race_number, departure_city, arrival_city, type_aircraft, time, actual_time, status }, handleSubmit } = this.props;

        const propsToRaceNumber = _.omit(race_number, [
                'error', 'touched', 'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'visited', 'autofilled'
            ]),
            propsToDepartureCity = _.omit(departure_city, [
                'error', 'touched', 'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'visited', 'autofilled'
            ]),
            propsToArrivalCity = _.omit(arrival_city, [
                'error', 'touched', 'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'visited', 'autofilled'
            ]),
            propsToTypeAircraft = _.omit(type_aircraft, [
                'error', 'touched', 'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'visited', 'autofilled'
            ]),
            propsToTime = _.omit(time, [
                'error', 'touched', 'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'visited', 'autofilled'
            ]),
            propsToActualTime = _.omit(actual_time, [
                'error', 'touched', 'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'visited', 'autofilled'
            ]),
            propsToStatus = _.omit(status, [
                'error', 'touched', 'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid', 'dirty', 'pristine', 'active', 'visited', 'autofilled'
            ]);

        return (
            <div>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <div className={ `form-group ${race_number.touched && race_number.invalid ? 'has-error' : ''}` }>
                        <label>Номер рейса*</label>
                        <input type='text' className='form-control' { ...propsToRaceNumber }
                            value={race_number.value || ''} />
                        <div className='text-danger'>
                            { race_number.touched ? race_number.error : '' }
                        </div>
                    </div>

                    <div className={ `form-group ${departure_city.touched && departure_city.invalid ? 'has-error' : ''}` }>
                        <label>Город вылета*</label>
                        <input type='text' className='form-control' { ...propsToDepartureCity }
                            value={departure_city.value || ''} />
                        <div className='text-danger'>
                            { departure_city.touched ? departure_city.error : '' }
                        </div>
                    </div>

                    <div className={ `form-group ${arrival_city.touched && arrival_city.invalid ? 'has-error' : ''}` }>
                        <label>Город прилёта*</label>
                        <input type='text' className='form-control' { ...propsToArrivalCity }
                            value={arrival_city.value || ''} />
                        <div className='text-danger'>
                            { arrival_city.touched ? arrival_city.error : '' }
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Тип самолёта</label>
                        <input type='text' className='form-control' { ...propsToTypeAircraft }
                            value={type_aircraft.value || ''} />
                        <div className='text-danger'>
                            { type_aircraft.touched ? type_aircraft.error : '' }
                        </div>
                    </div>

                    <div className={ `form-group ${time.touched && time.invalid ? 'has-error' : ''}` }>
                        <label>Время*</label>
                        <input type='datetime-local' className='form-control' { ...propsToTime }
                            value={time.value || ''} />
                        <div className='text-danger'>
                            { time.touched ? time.error : '' }
                        </div>
                    </div>

                    <div className={ `form-group ${actual_time.touched && actual_time.invalid ? 'has-error' : ''}` }>
                        <label>Фактическое время</label>
                        <input type='datetime-local' className='form-control' { ...propsToActualTime }
                            value={actual_time.value || ''} />
                        <div className='text-danger'>
                            { actual_time.touched ? actual_time.error : '' }
                        </div>
                    </div>

                    <div className={ `form-group ${status.touched && status.invalid ? 'has-error' : ''}` }>
                        <label>Статус</label>
                        <select className='form-control' { ...propsToStatus }
                            value={status.value || ''} >
                            <option value=''></option>
                            { statuses.map(value => <option value={value} key={value}>{value}</option>) }
                        </select>
                        <div className='text-danger'>
                            { status.touched ? status.error : '' }
                        </div>
                    </div>

                    <button type='submit' className={ this.props.submitBtnClass }>
                        { this.props.submitBtnText }
                    </button>
                    <Link to={ this.props.onBackBtn } className='btn btn-danger flight-new__btn_block--btn'>
                        Отмена
                    </Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.race_number) {
        errors.race_number = 'Номер рейса обязательный параметр';
    }

    if (!values.departure_city) {
        errors.departure_city = 'Город вылета обязательный параметр';
    }

    if (!values.arrival_city) {
        errors.arrival_city = 'Город прилёта обязательный параметр';
    }

    if (!values.time) {
        errors.time = 'Время обязательный параметр';
    }

    return errors;
}

FlightForm.propTypes ={
    initialValues: PropTypes.object,
    onSubmitEvent: PropTypes.func.isRequired,
    onBackBtn: PropTypes.string,
    submitBtnClass: PropTypes.string.isRequired,
    submitBtnText: PropTypes.string.isRequired,
    id: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};

export default reduxForm({
    form: 'FlightForm',
    fields: [
        'race_number', 'departure_city', 'arrival_city', 'type_aircraft', 'time', 'actual_time', 'status'
    ],
    validate
}, null, null)(FlightForm);
