import React, { Component } from 'react';
import PostForm from '../../components/PostForm/PostForm'


export default class PostUploadRoute extends Component {
    render() {
        return (
            <section>
                <PostForm 
                    history={this.props.history}
                />
            </section>
        )
    }
}
