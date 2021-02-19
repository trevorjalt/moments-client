import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserAndNavProvider } from '../../contexts/UserAndNavContext'
import { MomentsProvider } from '../../contexts/MomentsContext'
import ProfilePicture from './ProfilePicture'


describe(`ProfilePicture Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <UserAndNavProvider>
                        <MomentsProvider>
                            <ProfilePicture />
                        </MomentsProvider>
                    </UserAndNavProvider>
                </BrowserRouter>, div)
            
            ReactDOM.unmountComponentAtNode(div)
    })
})
