import React, {PropTypes} from 'react';
import resume from '../../assets/resume.png'

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <img src={resume}/>
      </div>
    );
  }
}

Resume.defaultProps = {
};
