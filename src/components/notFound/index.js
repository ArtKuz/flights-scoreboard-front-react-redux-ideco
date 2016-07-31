import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.scss';

export default class NotFound extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <p className='bg-danger not-found'>
                        Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
                    </p>
                </div>
            </div>
        )
    }
}