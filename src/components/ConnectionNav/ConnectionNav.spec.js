import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserAndNavProvider } from '../../contexts/UserAndNavContext'
import { MomentsProvider } from '../../contexts/MomentsContext'
import ConnectionNav from './ConnectionNav'


describe(`ConnectionNav Component`, () => {
    const props = {
        user: {
            user: {
                id: 1,
                username: 'kakarot',
                fullname: 'Goku'
            }
        }
    }
    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <UserAndNavProvider>
                        <MomentsProvider>
                            <ConnectionNav {...props}/>
                        </MomentsProvider>
                    </UserAndNavProvider>
                </BrowserRouter>, div)
            
            ReactDOM.unmountComponentAtNode(div)
    })
})
