import React, { Component } from 'react'
import MyContext from './MyContext'

export default class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
    }
  }

  toggleSideBar = () => this.setState({sideBar: !this.state.sideBar})

  render() {
    return (
      <MyContext.Provider value={{
        sideBar: this.state.sideBar,
        toggleSideBar: () => this.toggleSideBar()
      }}>
          {this.props.children}
      </MyContext.Provider>
    );
  }
}
