import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { dateTimeFormatForRead } from '../../helpers/dateTimeMoment';
import './styles.scss';

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        this.renderFlightItem = this.renderFlightItem.bind(this);
        this.adminTh = this.adminTh.bind(this);
        this.addAdminUpdateBtn = this.addAdminUpdateBtn.bind(this);
        this.addAdminDeleteBtn = this.addAdminDeleteBtn.bind(this);
    }

    renderFlightItem() {
        return this.props.flights.map(flight => {
            return (
                <tr key={ flight.id }>
                    <td>{ flight.race_number }</td>
                    <td>{ flight.departure_city }</td>
                    <td>{ flight.arrival_city }</td>
                    <td>{ flight.type_aircraft }</td>
                    <td>{ dateTimeFormatForRead(flight.time, 'DD.MM.YYYY HH:mm') }</td>
                    <td>{ dateTimeFormatForRead(flight.actual_time, 'DD.MM.YYYY HH:mm') }</td>
                    <td>{ flight.status }</td>
                    { this.addAdminUpdateBtn(flight.id) }
                    { this.addAdminDeleteBtn(flight.id) }
                </tr>
            )
        })
    }

    adminTh(value) {
        if (this.props.isAdmin) {
            return <th>{value}</th>
        } else {
            return null;
        }
    }

    addAdminUpdateBtn(id) {
        if (this.props.isAdmin) {
            return (
                <td>
                    <Link className='center-block btn btn-success' to={`admin/flight/${id}`}>
                        <span className='glyphicon glyphicon-pencil'></span>
                    </Link>
                </td>
            )
        } else {
            return null;
        }
    }

    addAdminDeleteBtn(id) {
        if (this.props.isAdmin) {
            return (
                <td>
                    <button type='button'
                            onClick={ this.onDeleteClick.bind(this, id) }
                            className='center-block btn btn-danger'>
                        <span className='glyphicon glyphicon-trash'></span>
                    </button>
                </td>
            )
        } else {
            return null;
        }
    }

    onDeleteClick(id) {
        this.props.onDeleteFlight(id);
        setTimeout(() => {
            this.props.onCitiesChange();
        }, 500);
    }

    render() {
        if (!this.props.flights.length) {
            return (
                <div className='table__clear-block'>
                    <p className='bg-warning table__clear-block--content'>
                        Рейсов нет!
                    </p>
                </div>
            )
        }

        return (
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Номер рейса</th>
                    <th>Город вылета</th>
                    <th>Город прилёта</th>
                    <th>Тип самолёта</th>
                    <th>Время</th>
                    <th>Фактическое время</th>
                    <th>Статус</th>
                    {this.adminTh('Обновить')}
                    {this.adminTh('Удалить')}
                </tr>
                </thead>
                <tbody>
                    { this.renderFlightItem() }
                </tbody>
            </table>
        );
    }
}

Scoreboard.propTypes ={
    flights: PropTypes.array.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    onCitiesChange: PropTypes.func.isRequired,
    onDeleteFlight: PropTypes.func.isRequired
};

export default Scoreboard;