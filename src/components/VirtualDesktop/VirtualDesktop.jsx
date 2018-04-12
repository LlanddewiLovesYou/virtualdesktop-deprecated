import React, {PropTypes} from 'react';
import '../OpenWindow/OpenWindow.css';
import '../Icon/Icon.css';
import './VirtualDesktop.css';
import Icon from '../Icon/Icon.jsx'
import OpenWindow from '../OpenWindow/OpenWindow.jsx'
import Fflickr from '../Fflickr/Fflickr.jsx'
import Penultimate from '../Penultimate/Penultimate.jsx'
import YayQuery from '../YayQuery/YayQuery.jsx'
import MackCali from '../MackCali/MackCali.jsx'
import ITunes from '../ITunes/ITunes.jsx'
import ReadMe from '../ReadMe/ReadMe.jsx'
import folder from '../../assets/folder.png'
import executable from '../../assets/executable.png'
import itunes from '../../assets/itunes.png'
import atom from '../../assets/atom.png'
import markdown from '../../assets/markdown.png'
import msdoc from '../../assets/msdoc.png'
import resume from '../../assets/resume.png'
import pdf from '../../assets/iandelducaresume3-26-18.pdf'



export default class VirtualDesktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resume: false,
      fflickr: false,
      penultimate: false,
      yayquery:false,
      mackcali: false,
      readme: false,
      itunes: false
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
        <Icon className='default-position' fileName='README' img={markdown} open={() => this.openFile('readme')} />
        <div id='readme-icon'>
          <Icon fileName='Resume' img={msdoc} open={() => this.openFile('resume')} />
        </div>
        <div id='fflickr-icon'>
          <Icon className='default-position' fileName='Fflickr' img={folder} open={() => this.openFile('fflickr')} />
        </div>
        <div id='penultimate-icon'>
          <Icon className='default-position' fileName='PenultimateFan...' img={folder} open={() => this.openFile('penultimate')} />
        </div>
        <div id='yayquery-icon'>
          <Icon className='default-position' fileName='YayQuery' img={folder} open={() => this.openFile('yayquery')} />
        </div>
        <div id='mackcali-icon'>
          <Icon className='default-position' fileName='Mack-Cali' img={folder} open={() => this.openFile('mackcali')} />
        </div>
        <div id='itunes-icon'>
          <Icon className='default-position' fileName='iTunes' img={itunes} open={() => this.openFile('itunes')} />
        </div>
        <div id='glados-icon'>
          <Icon className='default-position' fileName='GLaDOS.exe' img={executable} open={() => this.openFile('itunes')} />
        </div>
        {
          this.state.resume ? <a href={pdf} target='_blank'><OpenWindow
          cssId='resume-window'
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
        {
          this.state.penultimate ?
          <OpenWindow
            title='Penultimate Fa...'
            className='penultimate-container'
            close={() => this.closeFile('penultimate')}
            innerComponent={<Penultimate />}
            /> : null
        }
        {
          this.state.yayquery ?
          <OpenWindow
            title='YayQuery.js'
            className='yayquery-container'
            close={() => this.closeFile('yayquery')}
            innerComponent={<YayQuery />}
            /> : null
        }
        {
          this.state.mackcali ?
          <OpenWindow
            title='Mack-Cali'
            className='mackcali-container'
            close={() => this.closeFile('mackcali')}
            innerComponent={<MackCali />}
            /> : null
        }
        {
          this.state.itunes ?
          <ITunes/> : null
        }
        {
          this.state.readme ?
          <ReadMe
            close={() => this.closeFile('readme')}
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
