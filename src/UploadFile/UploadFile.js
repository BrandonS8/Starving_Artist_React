import React, { Component } from 'react'
import './UploadFile.css'
import axios from 'axios'
class UploadFile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl: ''
    }
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload (e) {
    e.preventDefault()
    this.props.startUpload()
    if (e.target.files.length > 0) {
      const fileData = new FormData()
      fileData.append('file', e.target.files[0])
      fileData.append(
        'filename',
        `image${Math.floor(Math.random() * (1000 - 1) + 1).toFixed(0)}`
      )
      // e.target.imageFile.files[0].name
      // axios post request
      axios.post('https://starving-artist.herokuapp.com/api/upload', fileData)
      axios({
        method: 'post',
        url: 'https://starving-artist.herokuapp.com/api/upload',
        data: fileData
      })
        .then(res => {
          this.setState({
            imageUrl: `https://starving-artist.herokuapp.com/${res.data.file}`
          })
        })
        .then(() => {
          this.props.setImage(this.state.imageUrl)
        })
    } else {
      console.log(
        `looks like the required field didn't stop your empty input, too bad I did.`
      )
    }
  }

  // https://levelup.gitconnected.com/file-upload-with-node-js-react-js-686e342ad7e7

  render () {
    return (
      <div>
        <input
          type='file'
          accept='image/jpg'
          name='imageFile'
          onChange={this.handleUpload}
          required
        />
      </div>
    )
  }
}

export default UploadFile
