import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header/Header';
import Main from  './Main/Main';
import Footer from './Footer/Footer';

import {coords} from './redux/actions/coordsActions';
import {scrolled} from './redux/actions/scrolledActions';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
 
  
  render() {
    window.addEventListener('scroll', this.props.scrolled);

// function io(){
//   if (scrolled > coords){
//     console.log('plus');
//   }
//   else {
//     console.log('minus');
//   }
// };
// io();

    return (
      <div className="App">
         <Header/>
        <Main/>
        <Footer/>
        <a href='#root'  className={this.props.userscrolled > this.props.usercoords ? 'back_to_top-show' : 'back_to_top'}  title="UP">&uarr;</a>
      </div>
    );
  }
};

function MSTP (state){
  return {
    userscrolled: state.scrolled,
    usercoords: state.coords,
   }
  }

function MDTP (dispatch) {
      return {
        
        coords: function(){
          dispatch(coords())
        },
        scrolled: function(){
          dispatch(scrolled())
        },
        
      
      }
    }

export default connect (MSTP, MDTP) (App);
