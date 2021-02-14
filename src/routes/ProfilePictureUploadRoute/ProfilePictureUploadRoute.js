import React, { Component } from 'react';
import ProfilePictureForm from '../../components/ProfilePictureForm/ProfilePictureForm'


export default class ProfilePictureUploadRoute extends Component {
    render() {
        return (
            <section>
                <ProfilePictureForm 
                    history={this.props.history}
                />
            </section>
        )
    }
}
