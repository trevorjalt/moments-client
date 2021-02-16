import React, { Component } from 'react';
import MomentsContext from '../../contexts/MomentsContext'
import UserAndNavContext from '../../contexts/UserAndNavContext'
import { buffTo64, NiceDate } from '../../components/Utils/Utils'
import MomentsApiService from '../../services/moments-api-service'
import { format, parseISO } from 'date-fns'
import ProfileGalleryExpanded from '../../components/ProfileGalleryExpanded/ProfileGalleryExpanded'


export default class Feed extends Component {
    static contextType = MomentsContext

    state = {
        photos: [],
        posts: [],
    }

    handleGetProfilePicture = ev => {
        ev.preventDefault()

        MomentsApiService.getProfilePicture()
            .then(res => this.setState({ photos: res }))
            .catch((err) => {
                console.log("Went Wrong", err);
        })
    }

    handleGetPostPhoto = ev => {
        ev.preventDefault()

        MomentsApiService.getPostPhoto()
            .then(res => this.setState({ posts: res }))
            .catch((err) => {
                console.log("Went Wrong", err);
        })
    }

    renderPhotos() {
        if (this.state.photos) {
            return (
                this.state.photos.map((val) => (
                  <div className="slot" key={val.id}>
                    {/* <h4>Name: {val.name}</h4> */}
                    <h4><NiceDate date={parseISO(val.date_created)} /></h4>
                    <img
                      alt=""
                      src={`data:image/${val.img_type};base64,${buffTo64(val.img_file.data)}`}
                    />
                    <hr />
                  </div>
                ))
            )
        } else {
            return ''
        }
    }

    renderPosts() {
        if (this.state.posts) {
            return (
                this.state.posts.map((val) => (
                  <div className="slot" key={val.id}>
                    {/* <h4>Name: {val.name}</h4> */}
                    <h4><NiceDate date={parseISO(val.date_created)} /></h4>
                    <img
                      alt=""
                      src={`data:image/${val.img_type};base64,${buffTo64(val.img_file.data)}`}
                    />
                    <hr />
                  </div>
                ))
            )
        } else {
            return ''
        }
    }

    render() {
        console.log('the state of our photos', this.state.photos)
        return (
            <div>
                <h2>The Feed</h2>
                <button onClick={this.handleGetProfilePicture}>Click Me For Profile Pic Test</button>
                {this.renderPhotos()}
                <button onClick={this.handleGetPostPhoto}>Click Me For Post Test</button>
                {this.renderPosts()}
                {/* <UserAndNavContext.Consumer>
                    {user => (
                        <ProfileGalleryExpanded user={user} />
                    )}
                </UserAndNavContext.Consumer> */}
            </div>
        );
    };
};
