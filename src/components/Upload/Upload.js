import React, { Component } from 'react'
import MomentsContext from '../../contexts/MomentsContext'
import ImageLogo from './images/image-logo.png'
import UploadLogo from './images/image-upload-logo.png'
import './Upload.css'

export default class Upload extends Component {
    static contextType = MomentsContext

    state = { 
        error: null,
        file: null,
        data: null,
    }

    inputRef = React.createRef()


    checkExtension = (fileName) => {
        const pattern = '(' + ['.jpg', '.gif', '.png', '.jpeg'].join('|').replace(/\./g, '\\.') + ')$';
        return new RegExp(pattern, 'i').test(fileName);
    }


    onChangeFile = (ev) => {
        const { setDataTrue, setDataFalse } = this.context

        if(!ev.target.files.length) {
            return
        }

        if(this.checkExtension(ev.target.files[0].name)) {
            this.readFile(ev.target.files[0]).then(file=>{
                if(file.file.size <= 1048576) {  
                    this.setState(oldVals=>({
                        ...oldVals,
                        data: file.dataURL,
                        file: file.file,
                        error: null
                    }))
                    setDataTrue()
                } else {
                    setDataFalse()
                    this.setState({
                        data: null,
                        file: null,
                        error: 'File Size Larger Than 1MB',
                    })
                }
                // setData()
            }).catch(err=>{
                console.log('ERROR:-', err)
                setDataFalse()
                this.setState({
                    data: null,
                    file: null,
                    error: 'Please choose a valid image',
                })
                
            })
        } else {
          this.setState({error: 'File Type Not Supported'})
        }
    }


    readFile = (file) => {
        return new Promise( (resolve, reject) => {
            const reader = new FileReader();
            // read the image received via FileReader and later save it to state
            reader.onload = function(ev) {
                const img = new Image()

                img.onload = () => {
                    let dataURL = ev.target.result;
                    if (file.name.length > 255) {
                        reject()
                    }

                    dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
                    resolve({ file, dataURL });
                }

                img.onerror = () => {
                    reject()
                }
                img.src = ev.target.result
            };
            reader.readAsDataURL(file);
        });
    }


    renderPreview() {
        return (
            <div className='upload-image-preview'>
                <img 
                    src={this.state.data}  
                    alt='upload-preview' 
                />
            </div>
        )
    }


    render() {
        const { error } = this.state

        return (
            <div className='uploader'>
                <div className='upload-preview'>
                    {this.state.data
                        ? this.renderPreview()
                        : (<img 
                            src={ImageLogo}
                            className='default-image'
                            alt='blank-image-logo'
                        />)
                    }
                </div>
                <div className='uploader-controls'>
                    <label htmlFor='upload-selector'>
                        <img 
                            src ={UploadLogo} 
                            alt='upload-button'
                            className='upload-selector-button' 
                        />
                    </label>
                    <input
                        ref={this.inputRef}
                        accept='image/*'
                        type='file'
                        id='upload-selector'
                        onChange={this.onChangeFile}
                        name='imageRequest'
                        required
                        aria-required='true'
                        autoComplete='off'
                        className='original-input'
                    />
                    <span className='image-info'>
                        .jpg .gif .png .jpeg &nbsp; up to 1MB
                    </span>
                    <div 
                        role='alert' 
                        className='error-message upload-error'
                        aria-live='assertive'
                    >
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        )
    }
}
