import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import { buffTo64, NiceDate } from '../Utils/Utils'
import MomentsApiService from '../../services/moments-api-service'
import { format, parseISO } from 'date-fns'
import './ProfileGallery.css'


export default class ProfileGallery extends Component {
    static contextType = MomentsContext

    state = {
        error: null,
        posts: [],
    }

    componentDidMount() {
        const { setUserPosts } = this.context
        MomentsApiService.getPostPhoto()
            .then(res => setUserPosts(res))
            .catch(err => this.setState({ error: err}))
    }


    renderPosts() {
        const { userPosts } = this.context

        if (userPosts) {
            return (
                userPosts.map((val) => (
                    <div className='collection' key={val.id}>
                        {/* <h4><NiceDate date={parseISO(val.date_created)} /></h4> */}
                        <div className='img-container'>
                        <img
                            className='collection-img'
                            alt={val.name}
                            src={`data:image/${val.img_type};base64,${buffTo64(val.img_file.data)}`}
                        />
                        </div>
                    </div>
                ))
            )
        } else {
            return (
                <div>
                    <span>No posts</span>
                </div>
            )
        }
    }

    render() {
        const { error } = this.state
        console.log('the state of our photos', this.state.photos)
        return (
            <div className='collection-wrapper'>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
                {this.renderPosts()}
            </div>
        )
    }
}
