import React, {PropTypes} from 'react';
import './ReadMe.css'

export default class ReadMe extends React.Component {
  render() {
    return (
      <div>
        <div className='readme-container'>
          <div className='close-button' onClick={this.props.close}></div>
          HEY HERE I AM!
        </div>
      </div>
    );
  }
}

ReadMe.propTypes = {
};
