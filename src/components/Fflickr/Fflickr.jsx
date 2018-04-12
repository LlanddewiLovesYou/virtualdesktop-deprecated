import React, {PropTypes} from 'react';
import './Fflickr.css'
import Icon from '../Icon/Icon.jsx'
import folder from '../../assets/folder.png';
import chrome from '../../assets/chrome.png';
import markdown from '../../assets/markdown.png';

export default class Fflickr extends React.Component {

  render() {
    return (
      <div className='test'>
        <a id='fflickr-1' href='https://github.com/LlanddewiLovesYou/Fflickr' target='_blank'>
          <Icon fileName='.git' img={folder}/>
        </a>
        <a id='fflickr-2' href='https://fflickr.herokuapp.com/' target='_blank'>
          <Icon fileName='Fflickr.com' img={chrome}/>
        </a>
        <div id='fflickr-3' onClick=''>
          <Icon  fileName='README' img={markdown}/>
        </div>
      </div>
    );
  }

}



Fflickr.propTypes = {
};
