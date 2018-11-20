import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class App extends React.Component {

  @observable name: string = '';

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.name = e.target.value;
  }

  public render() {
    return (
      <div className="App">
      {this.name}
        <input type="text" onChange={this.handleInput}/>
      </div>
    );
  }
}

export default App;
