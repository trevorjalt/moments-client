import React, { Component } from 'react'
import MomentsContext from '../../contexts/MomentsContext'
import './PostCaptionInput.css'


export default class PostCaption extends Component {
    static contextType = MomentsContext

    state = {
        error: null
    }

    handleCaptionInput = ev => {
        const { setCaptionInput } = this.context
        setCaptionInput(ev.target.value)
    }

    renderCaptionInput() {
        if (this.context.showCaptionInput === true) {
            return (
                <div
                    aria-live='assertive'
                    aria-relevant='all'
                    className='caption-input-wrapper'
                >
                    <label 
                        htmlFor='caption-input'
                        aria-label='caption-input'
                    />
                    <textarea
                        id='caption_input'
                        name='caption_input'
                        type='text'
                        className='caption-input'
                        placeholder='Add a caption for your moment'
                        aria-required='true'
                        autoComplete='off'
                        maxLength='500'
                        onInput={this.handleCaptionInput.bind(this)}
                    >
                    </textarea>
                </div>
            )
        }
    }

    render() {
        const { error } = this.state

        return (
            <div>
                {this.renderCaptionInput()}
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error}</p>}
                </div>
            </div>
        )
    }
}
