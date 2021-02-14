import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import UserAndNavContext from '../../contexts/UserAndNavContext'


export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    static contextType = UserAndNavContext

    state = { error: null }

    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()

        const { username, user_password } = ev.target

        this.setState({ error: null })

        AuthApiService.postLogin({
            username: username.value.toLowerCase(),
            user_password: user_password.value,
        })
            .then(res => {
                username.value = ''
                user_password.value = ''
                this.context.processLogin(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    componentDidMount() {
        this.firstInput.current.focus()
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmit}
            >
                <div
                    role='alert'
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='login-username-input' 
                        className='form-label'
                    >
                        Username
                    </label>
                    <input
                        ref={this.firstInput}
                        id='login-username-input'
                        name='username'
                        type='text'
                        required
                        aria-required='true'
                        autoComplete='username'
                    />
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='login-password-input' 
                        className='form-label'
                    >
                        Password
                    </label>
                    <input
                        id='login-password-input'
                        name='user_password'
                        type='password'
                        required
                        aria-required='true'
                        autoComplete='current-password'
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='public-button'
                    >
                        Login
                    </button>
                </div>
            </form>
        )
    }
}
