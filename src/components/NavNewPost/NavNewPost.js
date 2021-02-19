import React, { Component } from 'react'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import './NavNewPost.css'


export default class NavNewPost extends Component {
    static contextType = UserAndNavContext

    handleKeyPressed = (ev) => {
        if (ev.key === 'Enter') {
            this.handleNewPostClick()
        }
    }

    handleNewPostClick = () => {
        this.context.setShowNavFalse()
    }

    renderNewPostIcon() {
        return (
            <div
                className='new-post-icon'
                onClick={this.handleNewPostClick}
                onKeyDown={this.handleKeyPressed}
                tabIndex='0'
                role='button'
                aria-label='new-post-clickable'
                aria-expanded='false'
            >
                <span className='stripe-horizontal stripe' />
                <span className='stripe-vertical stripe' />  
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderNewPostIcon()}
            </div>
        )
    }
}
