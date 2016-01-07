import React from 'react';
import HeaderComponent from './Header';
import BodyComponent from './Body';
import WarningComponent from './Warning';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
        <WarningComponent />
      </div>
    );
  }
}

export default App;
