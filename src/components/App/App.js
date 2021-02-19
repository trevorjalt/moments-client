import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MomentsContext from '../../contexts/MomentsContext'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import AccountRoute from '../../routes/AccountRoute/AccountRoute'
import ConnectionRoute from '../../routes/ConnectionRoute/ConnectionRoute'
import FeedRoute from '../../routes/FeedRoute/FeedRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import PostUploadRoute from '../../routes/PostUploadRoute/PostUploadRoute'
import ProfileRoute from '../../routes/ProfileRoute/ProfileRoute'
import ProfilePictureUploadRoute from '../../routes/ProfilePictureUploadRoute/ProfilePictureUploadRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
// import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import NavMenu from '../NavMenu/NavMenu'
import './App.css'

export default class App extends Component {
    static contextType = MomentsContext

    state = { hasError: false }

    static getDerivedStateFromError(error) {
        console.error(error)
        return { hasError: true }
    }

    renderRoutes() {
        return (
            <Switch>
                <PublicOnlyRoute
                    exact
                    path={'/'}
                    component={Landing}
                />
                <PublicOnlyRoute
                    path={'/login'}
                    component={LoginRoute}
                />
                <PublicOnlyRoute
                    path={'/register'}
                    component={RegistrationRoute}
                />
                <PrivateRoute
                    path={'/account'}
                    component={AccountRoute}
                />
                <PrivateRoute
                    path={'/connection'}
                    component={ConnectionRoute}
                />
                <PrivateRoute
                    path={'/feed'}
                    component={FeedRoute}
                />
                <PrivateRoute
                    path={'/post-upload'}
                    component={PostUploadRoute}
                />
                <PrivateRoute
                    path={'/profile'}
                    component={ProfileRoute}
                />
                <PrivateRoute
                    path={'/profile-picture-upload'}
                    component={ProfilePictureUploadRoute}
                />
                <Route
                    component={NotFoundRoute}
                />
            </Switch>
        )
    }

    render() {
        const { hasError } = this.state
        const { setRequestedUserFalse } = this.context

        return (
            <div className='App'>
                <Header />
                <NavMenu 
                    setRequestedUserFalse={setRequestedUserFalse}
                />
                <main
                    className='App-Main'
                >  
                    {hasError && (
                        <p aria-live='assertive'>There was an error! Oh no!</p>
                    )}
                    {this.renderRoutes()} 
                </main>
                {/* <Footer /> */}
            </div>
        )
    }
}
