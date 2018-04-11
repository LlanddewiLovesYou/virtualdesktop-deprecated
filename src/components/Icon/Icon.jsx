import React, {PropTypes} from 'react';
import icon from '../../assets/icon.png';
import './Icon.css'

export default class Icon extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    // debugger
    return (
      <main className='div--iconwrapper' onClick={this.props.open}>
        <img
          className="img--icon"
          src={this.props.img}
        />
      <div className="div--filename">{this.props.fileName}</div>
      </main>
    );
  }

}

Icon.defaultProps = {
  fileName: 'FILE NAME',
  img: icon
};
