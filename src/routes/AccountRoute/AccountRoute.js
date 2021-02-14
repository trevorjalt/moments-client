import React, { Component } from 'react'
import Account from '../../components/Account/Account'
import UserAndNavContext from '../../contexts/UserAndNavContext'

// Most likely will no longer need the userandnavcontext.consumer with new component structure
export default class AccountRoute extends Component {
    render() {
        return (
            <section className='account-route'>
                {/* <h2>Account</h2> */}
                <UserAndNavContext.Consumer>
                    {user => (
                        <Account user={user}/>
                    )}
                </UserAndNavContext.Consumer>
            </section>
        )
    }
}
