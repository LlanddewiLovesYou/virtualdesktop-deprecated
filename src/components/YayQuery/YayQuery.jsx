import React, {PropTypes} from 'react';
import '../Fflickr/Fflickr.css'
import './YayQuery.css'
import Icon from '../Icon/Icon.jsx'
import folder from '../../assets/folder.png';
import chrome from '../../assets/chrome.png';
import markdown from '../../assets/markdown.png';

export default class YayQuery extends React.Component {

  render() {
    return (
      <div className='test'>
        <a id='yayquery-1' href='https://github.com/LlanddewiLovesYou/YayQuery' target='_blank'>
          <Icon fileName='.git' img={folder}/>
        </a>
        <div id='yayquery-2' onClick=''>
          <Icon  fileName='README' img={markdown}/>
        </div>
      </div>
    );
  }

}



YayQuery.propTypes = {
};
