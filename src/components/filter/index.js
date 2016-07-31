import React, { Component, PropTypes } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            value: ''
        };

        this.renderTypeOptions = this.renderTypeOptions.bind(this);
        this.renderValueOptions = this.renderValueOptions.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onFilterChange(this.state.value, this.state.type);
    }

    renderTypeOptions() {
        return this.props.filters.map((filter) => {
            let type = Object.keys(filter)[0],
                viewValue = filter[type];

            return <option key={type} value={type}>{viewValue}</option>
        });
    }

    renderValueOptions() {
        if (this.state.type) {
            return this.props.cities[this.state.type].map((city) => {
                return <option key={city} value={city}>{city}</option>
            });
        }
    }

    onChangeType(event) {
        this.setState({
            type: event.target.value
        })
    }

    onChangeValue(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <form className='filter'
                  onSubmit={ this.onFormSubmit }>

                <div className='form-group'>
                    <label>Тип фильтра:</label>
                    <select className='form-control'
                            onChange={ this.onChangeType }
                            value={ this.state.type }>
                        <option></option>
                        { this.renderTypeOptions() }
                    </select>
                </div>

                <div className='form-group'>
                    <select className='form-control'
                            onChange={ this.onChangeValue }
                            value={ this.state.value }>
                        <option></option>
                        { this.renderValueOptions() }
                    </select>
                </div>

                <button type='submit' className='btn btn-primary'>
                    Отфильтровать
                </button>
            </form>
        )
    }
}

Filter.propTypes ={
    onFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
    cities: PropTypes.object.isRequired
};

export default Filter;