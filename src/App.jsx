import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const test = uniqueId();
    return <a href="www.google.com">{test}</a>;
  }
}

export default App;
