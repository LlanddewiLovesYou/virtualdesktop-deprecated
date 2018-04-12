import React, {PropTypes} from 'react';
import finder from '../../assets/finder-window.png';
import './OpenWindow.css'

export default class OpenWindow extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <div className='open-window-container' id={this.props.cssId}>
        <div className='close-button' onClick={this.props.close}></div>
          <div className='window-title'>{this.props.title}</div>
          <div>{this.props.innerComponent}</div>



      </div>
    );
  }
}

OpenWindow.defualtProps = {
  title: 'Finder Window'
};
