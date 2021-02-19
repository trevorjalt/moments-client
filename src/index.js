import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserAndNavProvider } from './contexts/UserAndNavContext'
import { MomentsProvider } from './contexts/MomentsContext'
import App from './components/App/App';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserAndNavProvider>
                <MomentsProvider>
                    <App />
                </MomentsProvider>
            </UserAndNavProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
