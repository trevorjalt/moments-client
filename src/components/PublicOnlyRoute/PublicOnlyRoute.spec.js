import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserAndNavProvider } from '../../contexts/UserAndNavContext'
import { MomentsProvider } from '../../contexts/MomentsContext'
import PublicOnlyRoute from './PublicOnlyRoute'
import LandingRoute from '../../routes/LandingRoute/LandingRoute'


describe(`PublicOnlyRoute Component`, () => {
    const props = {
        component: LandingRoute
    }
    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <UserAndNavProvider>
                        <MomentsProvider>
                            <PublicOnlyRoute {...props}/>
                        </MomentsProvider>
                    </UserAndNavProvider>
                </BrowserRouter>, div)
            
            ReactDOM.unmountComponentAtNode(div)
    })
})
