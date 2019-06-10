import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {Layout} from "./Layout";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {currentName: "DATACLASSES"}
  }

  render() {
    console.log("layoutState", this.state)
    return (
      <Router>
        <Layout title="Kotlin in the real world" subtitle="a brief history..." name={this.state.currentName}></Layout>
      </Router>
    )
  }
}

export default App