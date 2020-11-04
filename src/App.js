import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {set_data} from './store/action'
class App extends Component {
  render(){
    console.log("redux_data==>",this.props)
    return(
      <div>
        hi
        <button onClick={()=>this.props.set_data("yahan se bhi jasakta he data")}>set data</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  username : state.auth.user_name,
  email : state.auth.email,
  appname : state.app.app_name
})

const mapDispatchToProps = (dispatch)=>({
  set_data: (data)=>dispatch(set_data(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
