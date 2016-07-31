import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, logout } from  '../../actions/userActions';
import './styles.scss';

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onLoginClick() {
        this.props.login();
        this.context.router.replace('/admin');
    }

    onLogoutClick() {
        this.props.logout();
        this.context.router.replace('/');
    }

    renderAuthBtn() {
        if (!this.props.isAuthenticated) {
            return <button className='btn btn-primary' onClick={this.onLoginClick.bind(this)}>Войти</button>
        } else {
            return <button className='btn btn-primary' onClick={this.onLogoutClick.bind(this)}>Выйти</button>
        }
    }

    render() {
        let user = this.props.user;

        return (
            <div className='row header'>
                <div className='col-md-10 col-sm-8 col-xs-12'>
                    <h3>
                        Табло рейсов в аэропорту. ideco
                    </h3>
                    <p className='lead'>
                        Вы вошли в систему как: <strong>{user}</strong>
                    </p>
                </div>
                <div className='col-md-2 col-sm-4 col-xs-12 header__btn-block'>
                    {this.renderAuthBtn()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.name,
        isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapStateToProps, { login, logout })(Header);