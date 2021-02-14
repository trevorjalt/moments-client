import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationRoute extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    handleRegistrationSuccess = () => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <section 
                className='registration-route'
                aria-live='polite'
                aria-relevant='all'
            >
                <h2>sign up</h2>
                <RegistrationForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </section>
        )
    }
}
