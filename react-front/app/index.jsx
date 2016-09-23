import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import './main.scss';
import ReactDOM from 'react-dom';
import Search from './components/search';
import Plist from './components/plist';
import TwoCode from './components/two_code'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {"keyword": ""};
    this.refreshKeyword = this.refreshKeyword.bind(this);
  }

  refreshKeyword(name) {
    this.setState({"keyword": name});
  }
  render() {
    //JSX here!
    return (
      <TwoCode />
    )
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
