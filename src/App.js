import React,{Component} from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>i love you</h1>
        <Ninjas name={"masud"} age={'26'} department={'cse'}/>
      </div>
    );
  }
}

export default App;
