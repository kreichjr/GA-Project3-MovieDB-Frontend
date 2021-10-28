import React, { Component } from 'react'
import './App.css'
import './ModalStyling.css'

class MovieSearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div className='searchAndBtnRow'>
          <p></p>
          <input
            className='inputText'
            type='text'
            id='titleSearchField'
            placeholder='Enter Movie Title...'
            onChange={this.props.handleChange}
            value={this.props.title}
          ></input>
          <input
            className='inputBtn'
            type='button'
            value='Search'
            onClick={this.props.handleSubmit}
          ></input>
        </div>
      </>
    )
  }
}

export default MovieSearchResults
