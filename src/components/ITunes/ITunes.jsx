import React, {PropTypes} from 'react';
import '../OpenWindow/OpenWindow.css'
import './ITunes.css'
import Poly from '../../assets/Chairlift - Polymorphing.mp3'

export default class ITunes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this.song = new Audio(Poly)
  }

  playToggle(){
    if (this.state.playing) {
      this.song.pause()
      this.setState({playing: false})
    } else {
      this.song.play()
      this.setState({playing: true})
    }
  }

  render() {
    if (this.state.playing) {
      return (
        <div>
          <div className='itunes-container-playing'>
            <div className='close-button' onClick={this.props.close}></div>
            <div className='play-button' onClick={() => this.playToggle()}></div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='itunes-container'>
            <div className='close-button' onClick={this.props.close}></div>
              <div className='play-button' onClick={() => this.playToggle()}></div>
          </div>
        </div>
      );

    }
  }
}

ITunes.propTypes = {
};
