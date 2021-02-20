import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import MomentsLogo from '../../components/ProfileGallery/images/moments-logo.png'
import Footer from '../../components/Footer/Footer'

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
                <img
                    className='moments-icon landing'
                    alt='moments-logo'
                    src={MomentsLogo}
                />
                <RegistrationForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
                <Footer />
            </section>
        )
    }
}
