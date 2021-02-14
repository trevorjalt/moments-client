import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserAndNavContext from '../../contexts/UserAndNavContext'

export default function PublicOnlyRoute({ component, ...props }) {
    const Component = component
    return (
        <Route
            {...props}
            render={componentProps => (
                <UserAndNavContext.Consumer>
                    {userContext =>
                        !!userContext.user.id
                            ? <Redirect to={'/'} />
                            : <Component {...componentProps} />
                    }
                </UserAndNavContext.Consumer>
            )}
        />
    )
}
