import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import MomentsLogo from '../ProfileGallery/images/moments-logo.png'
import './Landing.css'


export default class Landing extends Component {
    state = {
        error: null,
    }

    renderLinks() {
        return (
            <div className='get-started-wrapper'>
                <Link 
                    to='/register'
                    className='get-started'
                >
                    Sign up
                </Link>
                <span> or use the provided demo credentials on our </span>
                <Link 
                    to='/login'
                    className='get-started'
                >
                    Login
                </Link>
                <span> page</span>
            </div>
        )
    }

    renderMomentsInfo() {
        return (
            <div>
                <div className='landing-information-wrapper'>
                    <div className='landing-information'>
                        <h3 className='landing-section-title'>About</h3>
                        <p><span className='bold-information'>moments</span> is developer  
                            <a href='https://trevorjalt.github.io/trevorjalt' target='_blank'> 
                            Trevor J Alt’s</a> love letter to Instagram, a social media platform 
                            and passion project designed for ongoing development and 
                            personal educational growth in how to implement a heavily 
                            conditionally rendered environment which handles large amounts 
                            of data storage and retrieval.</p>
                        <p>And really, who doesn’t love scrolling through photos attached 
                            with inspirational quotes and song lyrics?</p>
                        <h3 className='landing-section-title'>Features</h3>
                        <p>In <span className='bold-information'>moments (release 1.0)</span>
                            , users can </p>
                        <ul>
                            <li>Create a new account and join the moments community</li>
                            <li>Submit login credentials for authentication</li>
                            <li>View account information</li>
                            <li>Upload a personal Profile Picture</li>
                            <li>Update a personal Profile Picture</li>
                            <li>Create posts with an image and caption</li>
                            <li>View profile posts in a condensed gallery</li>
                            <li>View profile posts in an expanded gallery</li>
                            <li>View personal number of followers</li>
                            <li>View personal number of posts.</li>
                            <li>View personal number of users they are following</li>
                            <li>View profiles of users who are following them</li>
                            <li>View profiles of users who they are following</li>
                            <li>View all moments users’ posts in a feed displayed with most recent posts first</li>
                        </ul>
                        <h3 className='landing-section-title'>Privacy Label</h3>
                        <p>The <span className='bold-information'>moments’</span>
                            developer is committed to only storing data which is 
                            necessary for the basic functionality of the application.</p>
                        <p>In its current release, <span className='bold-information'>moments 
                            </span> does not remove EXIF data from uploaded images.  We 
                            are working to implement this in a future release.</p>
                    </div>
                </div>
                <div>
                    <h3 className='landing-prompt'>Ready to get in the moment?</h3>
                </div>
                
            </div>
        )
    }

    render() {
        const { error } = this.state

        return (
            <div>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error.message}</p>}
                </div>
                <h2>welcome to moments.</h2>
                <img
                    className='moments-icon landing'
                    alt='moments-logo'
                    src={MomentsLogo}
                />
                {this.renderMomentsInfo()}
                {this.renderLinks()}
                <Footer />
            </div>
        )
    }
}
