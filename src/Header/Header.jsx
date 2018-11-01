import React, { Component } from 'react';
import ukFlag from '../image/if_United Kingdom(Great Britain)_16014.png';
import uaFlag from '../image/if_Ukraine-Flag_32361.png';
import backgroundHeader from '../image/desktop-2128422_1280.png';
import myFoto from '../image/FullSizeRender1.jpg';
import {menuShow} from '../redux/actions/showMenuActions';
import {connect} from 'react-redux';
import {changeLang} from '../redux/actions/langActions';
import './Header.css';


class Header extends Component {


    render() {
        return (
            <div className='header' style={ { backgroundImage: `url(${backgroundHeader})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'noRepeat', } }>

    <nav className='nav'>
        <ul className={this.props.showMenu ?  'menuShow' : 'menuHidden'}>        
        <li ><a className="listItem" href="#Contact">{this.props.lang ? 'contact' : 'контакти'}</a></li>
        <li ><a className="listItem" href="#Projects">{this.props.lang ? 'projects' : 'проекти'}</a></li>
        <li ><a className="listItem" href="#Technical">{this.props.lang ? 'technical skills' : 'технічні навики'}</a></li>
        <li ><a className="listItem" href="#Employment">{this.props.lang ? 'employment' : 'досвід роботи'}</a></li>
        <li ><a className="listItem" href="#Education">{this.props.lang ? 'education' : 'освіта'}</a></li>
        <li ><a className="listItem" href="#Soft">{this.props.lang ? 'soft skills' : 'додаткові вміння'}</a></li>
        <li ><a className="listItem" href="#Additional">{this.props.lang ? 'additional info' : 'додаткова інформація'}</a></li>
        
    </ul>
    
</nav>


         
         
              <div className='flagsHeader'>
                  <div onClick={this.props.changeLang}><img className='flags' src={ukFlag} alt="flag"/><img className='flags' src={uaFlag} alt="flag"/></div>
                  
              </div>
              
              <div className={this.props.showMenu ? 'wrapper-menu open' : 'wrapper-menu'} onClick={this.props.menuShow}>
  <div className="line-menu half start"></div>
  <div className="line-menu"></div>
  <div className="line-menu half end"></div>
</div>

              <img className='myFoto' src={myFoto} alt=""/>
              <h2 className='nameHeader'>{this.props.lang ? 'Yura Ostapenko' : 'Остапенко Юрій'}</h2> 
               <h3 className='positionHeader'>front-end developer</h3>
              
            </div>
        );
    }
}

function MSTP (state){
    return {
      showMenu: state.showMenu,
      lang: state.lang,
     }
    }

function MDTP (dispatch) {
        return {
          menuShow: function(){
            dispatch(menuShow())
          },
          changeLang: function(){
              dispatch(changeLang())
          }
        }
      }

export default connect(MSTP, MDTP) (Header);