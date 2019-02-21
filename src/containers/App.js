import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import propTypes from 'prop-types'
import 'react-toastify/dist/ReactToastify.min.css' 
import {increment, decrement} from '../actions/action.js'
import './App.css';


const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = ({
  increment,
  decrement,
})

class App extends Component {

  componentDidUpdate(prevProps, prevState){
    if(this.props.count > prevProps.count){
        toast.info('Counter Incremented!');
    }else if(this.props.count < prevProps.count){
        toast.error('Counter Decremented!');
    }
  }

  render(){
      const {count,increment,decrement} = this.props
      return (
          <div>
              <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
              />
              <div>{count}</div>
              <button onClick={decrement}>
                  Decrement
              </button>
              <button onClick={increment}>
                  Increment
              </button>
          </div>
      )
  }
}

App.propTypes = {
  count: propTypes.number.isRequired,
  increment: propTypes.func.isRequired,
  decrement: propTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
