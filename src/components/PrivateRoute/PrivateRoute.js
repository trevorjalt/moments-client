import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserAndNavContext from '../../contexts/UserAndNavContext'

export default function PrivateRoute({ component, ...props }) {
    const Component = component
    return (
        <Route
            {...props}
            render={componentProps => (
                <UserAndNavContext.Consumer>
                    {userContext =>
                        !!userContext.user.id
                            ? <Component {...componentProps} />
                            : (
                                <Redirect
                                    to={{
                                        pathname: userContext.user.idle ? '/login' : '/login',
                                        state: { from: componentProps.location },
                                    }}
                                />
                            )
                    }
                </UserAndNavContext.Consumer>
            )}
        />
    )
}
