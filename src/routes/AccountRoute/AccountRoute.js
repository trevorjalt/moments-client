import React, { Component } from 'react'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import Account from '../../components/Account/Account'

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
