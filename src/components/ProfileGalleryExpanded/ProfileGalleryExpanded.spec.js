import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserAndNavProvider } from '../../contexts/UserAndNavContext'
import { MomentsProvider } from '../../contexts/MomentsContext'
import ProfileGalleryExpanded from './ProfileGalleryExpanded'


describe.skip(`ProfileGalleryExpanded Component`, () => {
    const props = {
        user: {
            user: {
                id: 1,
                username: 'kakarot',
                fullname: 'Goku'
            }
        },
        divToFocus: [1],
        divObject: 1,
    }

    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <UserAndNavProvider>
                        <MomentsProvider>
                            <ProfileGalleryExpanded {...props} />
                        </MomentsProvider>
                    </UserAndNavProvider>
                </BrowserRouter>, div)
            ReactDOM.unmountComponentAtNode(div)
    })
})
