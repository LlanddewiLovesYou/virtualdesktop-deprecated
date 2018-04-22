import React, {PropTypes} from 'react';
import '../OpenWindow/OpenWindow.css';
import '../Icon/Icon.css';
import './VirtualDesktop.css';
import Icon from '../Icon/Icon.jsx'
import Resume from '../Resume/Resume.jsx'
import OpenWindow from '../OpenWindow/OpenWindow.jsx'
import Fflickr from '../Fflickr/Fflickr.jsx'
import Penultimate from '../Penultimate/Penultimate.jsx'
import YayQuery from '../YayQuery/YayQuery.jsx'
import MackCali from '../MackCali/MackCali.jsx'
import Glados from '../Glados/Glados.jsx'
import ITunes from '../ITunes/ITunes.jsx'
import ReadMe from '../ReadMe/ReadMe.jsx'
import Fiddles from '../Fiddles/Fiddles.jsx'
import folder from '../../assets/folder.png'
import executable from '../../assets/executable.png'
import itunes from '../../assets/itunes.png'
import atom from '../../assets/atom.png'
import markdown from '../../assets/markdown.png'
import jpg from '../../assets/jpg.png'
import msdoc from '../../assets/msdoc.png'
import resume from '../../assets/resume.png'
import ianresume from '../../assets/ianresume420.png';
import pdf from '../../assets/iandelducaresume3-26-18.pdf'
import photobar from '../../assets/jpgbar.png'
import headshot from '../../assets/headshot.png'


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
      itunes: false,
      fflickrReadme: false,
      penultimateReadme: false,
      yayqueryReadme: false,
      mackcaliReadme: false,
      photo: false,
      fiddles: false,
    }
    this.openFile = this.openFile.bind(this)
  }

  openFile(filename){
    let files = ['fflickr',
     'penultimate',
     'yayquery',
     'mackcali',
     'fiddles'
   ]
    if (files.includes(filename)) {
      this.setState({
        fflickr: false,
        penultimate: false,
        yayquery:false,
        mackcali: false,
        fflickrReadme: false,
        penultimateReadme: false,
        yayqueryReadme: false,
        mackcaliReadme: false,
        fiddles: false
      })
    }
    this.setState({[filename]: true})
  }

  closeFile(filename){
    this.setState({[filename]: false})
  }

  render() {
    // console.log(this.state)

    return (
      <div className='desktop-background'>
        <div id='jpg-icon'>
          <Icon fileName='me.jpg' img={jpg} open={() => this.openFile('photo')} />
        </div>
        {
          this.state.photo ?
          <div className='photo-container'>
            <div className='close-button' onClick={() => this.closeFile('photo')}></div>
            <img className='photobar' src={photobar} />
            <img className='headshot' src={headshot} />
          </div> : null
        }
        <div id='fiddle-icon'>
          <Icon fileName='fiddles' img={folder} open={() => this.openFile('fiddles')} />
        </div>
        {
          this.state.fiddles ? <OpenWindow
          title='Fiddles'
          close={() => this.closeFile('fiddles')}
          innerComponent={<Fiddles />}
          /> : null

        }

        <Icon id='readme-icon' fileName='README' img={markdown} open={() => this.openFile('readme')} />
          {
            this.state.readme ?
            <ReadMe
              close={() => this.closeFile('readme')}
              copy={[
                <div>
                  <p>&#9835;<u>"Something Better than what you're asking for..."</u> &#9834;</p>
                  <p>
                    Welcome to my Virtual Desktop. Here you can get a glimpse of what my process
                    is like and some of the projects I am currently working/have previously worked on.
                    Just in case it's not clear, you can close any window by clicking it close button
                    in the top left corner, just like on any local desktop.
                  </p>
                  <p>
                    I'm a full-stack developer working primarily in Rails/React (this
                    entire site is built in React, btw) with a background in Design and
                    extensive exerience in Project Managment. Somewhere hidden on this
                    site is an easter egg which should give you a hint as to my technical
                    training!
                  </p>
                  <p>
                    I love working creatively as part of team, bouncing ideas around
                    and coming up with out of the box UI solutions (again, such as this
                    portfolio site.)
                  </p>
                  <p>
                    When I'm not creatively problem solving, I enjoy a variety of activities
                    including Olympic-style weight-lifiting, distance running, and all manner
                    of what I like to call "Nerd Socializing" (i.e. Board Games, table-top RPGS,
                    video games etc.)
                  </p>
                  <p>
                    I hope you enjoy!
                  </p>
                  <p>
                    Yours,
                  </p>
                  <p>
                    Ian Del Duca
                  </p>
                </div>
              ]}
              /> : null
          }
        <div id='resume-icon'>
          <Icon fileName='Resume' img={msdoc} open={() => this.openFile('resume')} />
        </div>
        {
          this.state.resume ? <OpenWindow
          cssId='resume-window'
          close={() => this.closeFile('resume')}
          innerComponent={<Resume src={ianresume}/>}
          /> : null
        }


        <div id='fflickr-icon'>
          <Icon className='default-position' fileName='Fflickr' img={folder} open={() => this.openFile('fflickr')} />
        </div>
        {
          this.state.fflickr ?
          <OpenWindow
            title='Fflickr'
            className='open-window-container'
            close={() => this.closeFile('fflickr')}
            innerComponent={<Fflickr open={() => this.openFile('fflickrReadme')} />}
            /> : null
        }
        {
          this.state.fflickrReadme ?
          <ReadMe
            close={() => this.closeFile('fflickrReadme')}
            copy={[
              <div>
                <p>
                  Fflickr is an image sharing and hosting app which emulates the
                  core funtionality of Yahoo's Flickr.
                </p>
                <p>
                  Users can share, comment on, and tag photos in addition to grouping
                  them into albums.
                </p>
                <p>
                  It is built with Rails serving PostgreSQL on the backend, and React
                  and Redux on the front end.
                </p>
                <p>
                  Images are hosted on AWS which is managed through use of the Ruby
                  PaperClip Gem. Images can be uploaded using drag-and-drop through
                  use of the Dropzone JavaScript library.
                </p>
                <p>
                  <a href='#'>View full ReadMe on GitHub</a>
                </p>
              </div>
            ]}
            /> : null
        }


        <div id='penultimate-icon'>
          <Icon className='default-position' fileName='PenultFan...' img={folder} open={() => this.openFile('penultimate')} />
        </div>
        {
          this.state.penultimate ?
          <OpenWindow
            title='Penult...'
            className='penultimate-container'
            close={() => this.closeFile('penultimate')}
            innerComponent={<Penultimate open={() => this.openFile('penultimateReadme')}/>}
            /> : null
        }
        {
          this.state.penultimateReadme ?
          <ReadMe
            close={() => this.closeFile('penultimateReadme')}
            copy={[
              <div>
                <p>
                  Penultimate Fantasy is a match-three 'candy-crush' style game
                  built for the browser. It uses the match-three mechanic to help
                  a group of heros defeat an enemy dragon.
                </p>
                <p>
                  A correct match decreases the dragons HP. If the player can bring
                  those HP down to zero within 20 turns, they win. If not they face
                  the dragon's wrath!
                </p>
                <p>
                  This game serves as an example of my ability to code in JavaScript and
                  as a demo of my YayQuery.js Library, also featured on this site.
                  All DOM manipulation usually designated for JQuery is exectuted by
                  YayQuery.js instead. I also used Animate.css to help smooth over the
                  sprite animations.
                </p>
                <p>
                  <a href='#'>View full ReadMe on GitHub</a>
                </p>
              </div>
            ]}
            /> : null
        }

        <div id='yayquery-icon'>
          <Icon className='default-position' fileName='YayQuery' img={folder} open={() => this.openFile('yayquery')} />
        </div>
        {
          this.state.yayquery ?
          <OpenWindow
            title='YayQuery.js'
            className='yayquery-container'
            close={() => this.closeFile('yayquery')}
            innerComponent={<YayQuery open={() => this.openFile('yayqueryReadme')}/>}
            /> : null
        }
        {
          this.state.yayqueryReadme ?
          <ReadMe
            close={() => this.closeFile('yayqueryReadme')}
            copy={[
              <div>
                <p>
                  YayQuery.js!
                </p>
                <p>
                  YayQuery.js! as the name suggests, is my self-authored
                  JavaScript library which emulates much of the functionality
                  of JQuery including the selection of DOM elements, AJAX requests,
                   and adding and removing classes and event listeners.
                </p>
                <p>
                  You can see it in action by checking out the 'Penultimate Fantasy'
                  project above, which is written entirely in YayQuery!
                </p>
                <p>
                  <a href='#'>View full ReadMe on GitHub</a>
                </p>
              </div>
            ]}
            /> : null
        }

        <div id='mackcali-icon'>
          <Icon className='default-position' fileName='Mack-Cali' img={folder} open={() => this.openFile('mackcali')} />
        </div>
        {
          this.state.mackcali ?
          <OpenWindow
            id='mcwindow'
            title='Mack-Cali'
            className='mackcali-container'
            close={() => this.closeFile('mackcali')}
            innerComponent={<MackCali open={() => this.openFile('mackcaliReadme')}/>}
            /> : null
        }
        {
          this.state.mackcaliReadme ?
          <ReadMe
            close={() => this.closeFile('mackcaliReadme')}
            copy={[
              <div>
                <p>
                  Mack-Cali 2018
                </p>
                <p>
                  This is a site I developed in conjunction with Inc Design group
                  for the Mack-Cali Real Estate Corporation and it's shareholders.
                </p>
                <p>
                  It's built entirely in React, using React-Strap to handle the site's
                  responsive needs. I crafted several charts and graphs to order
                  using Chart.js, which uses canvas to render and animate data visually.
                </p>
                <p>
                  <a href='#'>View full ReadMe on GitHub</a>
                </p>
              </div>
            ]}
            /> : null
        }

        <div id='itunes-icon'>
          <Icon className='default-position' fileName='iTunes' img={itunes} open={() => this.openFile('itunes')} />
        </div>
        {
          this.state.itunes ?
          <ITunes
            close={() => this.closeFile('itunes')}
            /> : null
        }


        <div id='glados-icon'>
          <Icon className='default-position' fileName='GLaDOS.exe' img={executable} open={() => this.openFile('glados')} />
        </div>
        {
          this.state.glados ? <Glados id='glados-window' close={()=> this.closeFile('glados')}/> : null
        }









      </div>
    );
  }



}


VirtualDesktop.propTypes = {
};



// <Icon className='second-fflickr' fileName='readme'/>,
// <Icon id='third-fflickr' fileName='link'/>
