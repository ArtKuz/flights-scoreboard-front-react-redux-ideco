import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export default function Authentication(Component) {
    class AuthenticatedComponent extends React.Component {
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            this.checkAuth(this.props.user)
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.user)
        }

        checkAuth(user) {
            if (!user.isAuthenticated) {
                this.context.router.replace('/');
            }
        }
        render() {
            return (
                <div>
                    {this.props.user.isAuthenticated === true
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(AuthenticatedComponent)
}