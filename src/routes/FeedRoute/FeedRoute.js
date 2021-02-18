import React, { Component } from 'react'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import Feed from '../../components/Feed/Feed'


export default class FeedRoute extends Component {
    render() {
        return (
            <section className='feed-route'>
                <UserAndNavContext.Consumer>
                    {user => (
                        <Feed user={user}/>
                    )}
                </UserAndNavContext.Consumer>
            </section>
        )
    }
}
