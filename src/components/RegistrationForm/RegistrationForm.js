import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    static contextType = UserAndNavContext

    state = { 
        error: null,
    }

    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()

        const { 
            fullname, 
            username, 
            user_password,
            user_password_match,
            email,
            about_user,
            privacy,
        } = ev.target

        if (user_password.value !== user_password_match.value) {
            this.setState( {error: 'Passwords must match' })
            return
        } else {
            this.setState({ error: null })
            AuthApiService.postUser({
                fullname: fullname.value,
                username: username.value.toLowerCase(),
                user_password: user_password.value,
                email: email.value.toLowerCase(),
                about_user: about_user.value,
                privacy: privacy.value
            })
                // .then(req => console.log(req))
                .then(user => {
                    fullname.value = ''
                    username.value = ''
                    user_password.value = ''
                    user_password_match.value = ''
                    email.value= ''
                    about_user.value= ''
                    this.props.onRegistrationSuccess()
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })
        }
    }

    componentDidMount() {
        this.firstInput.current.focus()
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='registration-form'
                onSubmit={this.handleSubmit}
            >
                <div className='form-wrapper'>
                    <label 
                        htmlFor='registration-fullname-input'
                        className='form-label'
                    >
                        Full name
                    </label>
                    <input
                        ref={this.firstInput}
                        id='registration-fullname-input'
                        type='text'
                        name='fullname'
                        required
                        aria-required='true'
                        autoComplete='name'
                    />
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='registration-username-input'
                        className='form-label'
                    >
                        Username
                    </label>
                    <input
                        id='registration-username-input'
                        name='username'
                        required
                        aria-required='true'
                        autoComplete='off'
                    />
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='registration-password-input'
                        className='form-label'
                    >
                        Password
                    </label>
                    <input
                        id='registration-password-input'
                        name='user_password'
                        type='password'
                        required
                        aria-required='true'
                        autoComplete='new-password'
                  />
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='registration-password-match-input'
                        className='form-label'
                    >
                        Confirm password
                    </label>
                    <input
                        id='registration-password-match-input'
                        name='user_password_match'
                        type='password'
                        required
                        aria-required='true'
                        autoComplete='off'
                    >
                    </input>
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='registration-email-input'
                        className='form-label'
                    >
                        Email
                    </label>
                    <input
                        id='registration-email-input'
                        name='email'
                        type='email'
                        required
                        aria-required='true'
                        autoComplete='email'
                    >
                    </input>
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='registration-about-user-input'
                        className='form-label'
                    >
                        About
                    </label>
                    <input
                        id='registration-about-user-input'
                        name='about_user'
                        required
                        aria-required='true'
                        autoComplete='off'
                    >
                    </input>
                </div>
                <div className='form-wrapper'>
                    <label 
                        htmlFor='registration-user-stack-input'
                        className='form-label'
                    >
                        Privacy setting
                    </label>
                    <select 
                        id='registration-privacy-setting-input'
                        name='privacy'
                        defaultValue='Public' 
                        required
                        aria-required='true'
                    >
                        <option value='Public'>Public</option>                           
                        <option value='Private'>Private</option>
                    </select>
                </div>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <button 
                        type='submit'
                        className='public-button'
                    >  
                        Sign up
                    </button>
                    <div className='link-wrapper'>
                        <Link 
                            to='/login'
                            className='link-text'
                        >
                            Already have an account?
                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}
