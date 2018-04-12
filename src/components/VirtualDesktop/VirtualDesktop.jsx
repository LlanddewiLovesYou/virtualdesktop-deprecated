import React, {PropTypes} from 'react';
import '../OpenWindow/OpenWindow.css';
import '../Icon/Icon.css';
import './VirtualDesktop.css';
import Icon from '../Icon/Icon.jsx'
import OpenWindow from '../OpenWindow/OpenWindow.jsx'
import Fflickr from '../Fflickr/Fflickr.jsx'
import folder from '../../assets/folder.png'
import markdown from '../../assets/markdown.png'
import msdoc from '../../assets/msdoc.png'
import resume from '../../assets/resume.png'
import pdf from '../../assets/iandelducaresume3-26-18.pdf'



export default class VirtualDesktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resume: false,
      fflickr: false
    }
    this.openFile = this.openFile.bind(this)
  }

  openFile(filename){
    this.setState({[filename]: true})
  }

  closeFile(filename){
    this.setState({[filename]: false})
  }

  render() {
    console.log(this.state)

    return (
      <div className='desktop-background'>
        <Icon fileName='Resume' img={msdoc} open={() => this.openFile('resume')} />
        <div id='fflickr-icon'>
          <Icon className='default-position' fileName='Fflickr' img={folder} open={() => this.openFile('fflickr')} />
        </div>
        {
          this.state.resume ? <a href={pdf} target='_blank'><OpenWindow
          img='resume-window'
          close={() => this.closeFile('resume')}
          /></a> : null
        }
        {
          this.state.fflickr ?
          <OpenWindow
            title='Fflickr'
            className='open-window-container'
            close={() => this.closeFile('fflickr')}
            innerComponent={<Fflickr />}
            /> : null
        }
      </div>
    );
  }

}


VirtualDesktop.propTypes = {
};



// <Icon className='second-fflickr' fileName='readme'/>,
// <Icon id='third-fflickr' fileName='link'/>
