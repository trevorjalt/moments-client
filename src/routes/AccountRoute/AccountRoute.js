import React, { Component } from 'react'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import Account from '../../components/Account/Account'


export default class AccountRoute extends Component {
    render() {
        return (
            <section className='account-route'>
                <UserAndNavContext.Consumer>
                    {user => (
                        <Account user={user}/>
                    )}
                </UserAndNavContext.Consumer>
            </section>
        )
    }
}
