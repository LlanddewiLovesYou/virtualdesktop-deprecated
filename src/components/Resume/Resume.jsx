import React, {PropTypes} from 'react';
import pdf from '../../assets/iandelducaresume3-26-18.pdf';

import './Resume.css'

export default class Resume extends React.Component {
  render() {
    return (
      <div className='resume-container'>
        <a href={pdf} target='_blank'><img className='resume-img' src={this.props.src}/></a>
      </div>
    );
  }
}

Resume.defaultProps = {
};
