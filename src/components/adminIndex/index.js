import React, { Component } from 'react';
import { Link } from 'react-router';

import TableContent from '../../containers/tableContent'

class AdminIndex extends Component {
    render() {
        return (
            <div>
                <div className='pull-right'>
                    <Link to='admin/flight/new' className='btn btn-primary'>
                        Добавить рейс
                    </Link>
                </div>
                <div className='clearfix'></div>
                <TableContent isAdmin={ true } />
            </div>
        );
    }
}

export default AdminIndex;