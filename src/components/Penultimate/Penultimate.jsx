import React, {PropTypes} from 'react';
import '../Fflickr/Fflickr.css'
import './Penultimate.css'
import Icon from '../Icon/Icon.jsx'
import folder from '../../assets/folder.png';
import chrome from '../../assets/chrome.png';
import markdown from '../../assets/markdown.png';

export default class Penultimate extends React.Component {

  render() {
    return (
      <div className='test'>
        <a id='penultimate-1' href='https://github.com/LlanddewiLovesYou/PenultimateFantasy' target='_blank'>
          <Icon fileName='.git' img={folder}/>
        </a>
        <a id='penultimate-2' href='http://iandelduca.com/PenultimateFantasy' target='_blank'>
          <Icon fileName='Penultimate.exe' img={chrome}/>
        </a>
        <div id='penultimate-3' onClick=''>
          <Icon  fileName='README' img={markdown}/>
        </div>
      </div>
    );
  }

}



Penultimate.propTypes = {
};
