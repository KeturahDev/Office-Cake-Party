import React from 'react';
import Welcome from '../views/Welcome'

class MainContent extends React.Component {
  constructor () {
    super()
    this.state = {
      view: <Welcome navigation={(chosenState) => {this.setState({view: chosenState})}}/>
    }
  }
  render() {
    return(
      <>
        {this.state.view}
      </>
    )
  }
}

export default MainContent