import React, {PropTypes} from 'react';
import './VirtualDesktop.css';
import '../OpenWindow/OpenWindow.css';
import Icon from '../Icon/Icon.jsx'
import OpenWindow from '../OpenWindow/OpenWindow.jsx'
import Fflickr from '../Fflickr/Fflickr.jsx'
import folder from '../../assets/folder.png'
// import finder from '../../assets/finder-window.png'

export default class VirtualDesktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fflickr: false
    }
    this.openFflickr = this.openFflickr.bind(this)
  }

  openFflickr(){
    this.setState({fflickr:true})
  }

  closeFflickr(){
    this.setState({fflickr:false})
  }

  render() {
    return (
      <div className='desktop-background'>
      {console.log(this.state)}
        <Icon className='default-position' fileName='Fflickr' img={folder} open={() => this.openFflickr()} />
        {
          this.state.fflickr ?
          <OpenWindow
            title='Fflickr'
            className='open-window-container'
            close={() => this.closeFflickr()}
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
