import React, { Component } from 'react';

const API_URL = 'http://localhost:3900';

class App extends Component {
  state = {
    image: { src: '', name: '' },
    file: null
  };

  handleFile = e => {
    this.setState({ file: e.target.files[0] });
  };

  uploadImage = async e => {
    e.preventDefault();
    const file = this.state.file;
    const formData = new FormData();

    formData.append('img', file);

    await fetch(API_URL, {
      method: 'POST',
      body: formData
    });

    this.setState({
      image: {
        src: `${API_URL}/${file.name}`,
        name: file.name
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className='container-fluid'>
          <div className='jumbotron'>
            <h1 className='display-4'>Image Uploader</h1>
            <p className='lead'>
              This is a simple application to upload and retrieve images from a
              database
            </p>
            <hr />
          </div>
        </section>
        <section className='py-5 container'>
          <div className='row'>
            <div className='col-5 mx-auto shadow py-4'>
              <div className='form-group'>
                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='file'
                    name='file'
                    onChange={this.handleFile}
                  />
                  <label className='custom-file-label' htmlFor='file'>
                    {this.state.file ? this.state.file.name : 'Choose file'}
                  </label>
                </div>
              </div>
              <button
                type='button'
                className='btn btn-primary'
                onClick={this.uploadImage}
              >
                Upload
              </button>
            </div>
            <div className='col-5 mx-auto shadow'>
              <img
                id='img'
                src={this.state.image.src}
                className='img-fluid'
                alt={this.state.image.name}
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
