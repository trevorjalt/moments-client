import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'


export default class LoginRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/feed'
        history.push(destination)
    }

    render() {
        return (
            <section 
                className='login-route'
                aria-live='polite'
                aria-relevant='all'
            >
                <h2>login</h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}
