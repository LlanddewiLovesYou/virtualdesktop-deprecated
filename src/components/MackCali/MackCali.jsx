import React, {PropTypes} from 'react';
import '../Fflickr/Fflickr.css'
import './MackCali.css'
import Icon from '../Icon/Icon.jsx'
import folder from '../../assets/folder.png';
import chrome from '../../assets/chrome.png';
import markdown from '../../assets/markdown.png';

export default class Penultimate extends React.Component {

  render() {
    return (
      <div className='test'>
        <a id='mackcali-1' href='https://github.com/LlanddewiLovesYou/mack-cali' target='_blank'>
          <Icon fileName='.git' img={folder}/>
        </a>
        <a id='mackcali-2' href='http://iandelduca.com/mack-cali' target='_blank'>
          <Icon fileName='MackCali.html' img={chrome}/>
        </a>
        <div id='mackcali-3' onClick={this.props.open}>
          <Icon  fileName='README' img={markdown}/>
        </div>
      </div>
    );
  }

}



Penultimate.propTypes = {
};
