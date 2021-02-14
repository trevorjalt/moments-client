import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const UserAndNavContext = React.createContext({
    error: null,
    // isLoggedIn: null,
    showNav: false,
    user: {},
    clearError: () => { },
    setError: () => { },
    setShowNav: () => { },
    setShowNavFalse: () => { },
    setUser: () => { },
    processLogin: () => { },
    processLogout: () => { },

})

export default UserAndNavContext

export class UserAndNavProvider extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null,
            showNav: false,
            user: {},
        }

        const jwtPayload = TokenService.parseAuthToken()

        if (jwtPayload)
            state.user = {
                id: jwtPayload.user_id,
                fullname: jwtPayload.fullname,
                username: jwtPayload.sub,
                email: jwtPayload.email,
                about_user: jwtPayload.about_user,
                privacy: jwtPayload.privacy,
            }

        this.state = state;
        IdleService.setIdleCallback(this.logoutBecauseIdle)
    }

    componentDidMount() {
        if (TokenService.hasAuthToken()) {
            IdleService.regiserIdleTimerResets()
            TokenService.queueCallbackBeforeExpiry(() => {
                this.fetchRefreshToken()
            })

            // if (!this.state.isLoggedIn) {
            //     this.setIsLoggedIn()
            // }
        }
    }

    componentWillUnmount() {
        IdleService.unRegisterIdleResets()
        TokenService.clearCallbackBeforeExpiry()
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    setShowNav = () => {
        this.setState({ showNav: !this.state.showNav })
    }

    setShowNavFalse = () => {
        this.setState({ showNav: false })
    }

    setUser = user => {
        this.setState({ user })
    }

    // setIsLoggedIn = () => {
    //     this.setState({ isLoggedIn: !this.state.isLoggedIn })
    // }

    processLogin = authToken => {
        TokenService.saveAuthToken(authToken)
        const jwtPayload = TokenService.parseAuthToken()
        this.setUser({
            id: jwtPayload.user_id,
            fullname: jwtPayload.fullname,
            username: jwtPayload.sub,
            email: jwtPayload.email,
            about_user: jwtPayload.about_user,
            privacy: jwtPayload.privacy,
        })
        IdleService.regiserIdleTimerResets()
        TokenService.queueCallbackBeforeExpiry(() => {
            this.fetchRefreshToken()
        })
        // this.setIsLoggedIn(true)
    }

    processLogout = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        // this.setIsLoggedIn(false)
        this.setUser({})

    }

    logoutBecauseIdle = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        // this.setIsLoggedIn(false)
        this.setUser({ idle: true })
    }

    fetchRefreshToken = () => {
        AuthApiService.refreshToken()
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                TokenService.queueCallbackBeforeExpiry(() => {
                    this.fetchRefreshToken()
                })
            })
            .catch(err => {
                this.setError(err)
            })
    }

    render() {
        const value = {
            error: this.state.error,
            // isLoggedIn: this.state.isLoggedIn,
            showNav: this.state.showNav,
            user: this.state.user,
            clearError: this.clearError,
            setError: this.setError,
            setShowNav: this.setShowNav,
            setShowNavFalse: this.setShowNavFalse,
            setUser: this.setUser,
            processLogin: this.processLogin,
            processLogout: this.processLogout,

        }
        return (
            <UserAndNavContext.Provider value={value}>
                {this.props.children}
            </UserAndNavContext.Provider>
        )
    }
}