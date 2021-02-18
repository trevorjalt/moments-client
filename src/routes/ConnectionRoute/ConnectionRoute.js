import React, { Component } from 'react'
import Connection from '../../components/Connection/Connection'
import UserAndNavContext from '../../contexts/UserAndNavContext'


export default class ConnectionRoute extends Component {
    static contextType = UserAndNavContext

    render() {
        return (
            <div>
                <UserAndNavContext.Consumer>
                    {user => (
                        <Connection 
                            user={user}
                            history={this.props.history}
                        />
                    )}
                </UserAndNavContext.Consumer>
            </div>
        )
    }
}
