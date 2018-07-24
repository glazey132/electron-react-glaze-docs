import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
