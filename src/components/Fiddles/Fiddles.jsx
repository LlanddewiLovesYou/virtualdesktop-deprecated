import React, {PropTypes} from 'react';
import './Fiddles.css'
import Icon from '../Icon/Icon.jsx'
import folder from '../../assets/folder.png';
import chrome from '../../assets/chrome.png';
import markdown from '../../assets/markdown.png';
import itunes from '../../assets/itunes.png';
import github from '../../assets/github.png';

export default class Fflickr extends React.Component {

  render() {
    return (
      <div className='test'>
        <a id='fiddle-1' href='https://jsfiddle.net/LlanddewiLovesYou/fpvktj7o/' target='_blank'>
          <Icon fileName='iTunes API' img={itunes}/>
        </a>
        <a id='fiddle-2' href='https://jsfiddle.net/LlanddewiLovesYou/owjfuq7d/' target='_blank'>
          <Icon fileName='GitHub API' img={github}/>
        </a>
      </div>
    );
  }

}



Fflickr.propTypes = {
};
