import React,{Component} from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas:[
      {name:'masud', age: '26', department:'cse',id:'1'},
      {name:'rayhan', age: '19', department:'bba',id:'2'},
      {name:'miraj', age: '22', department:'eee',id:'3'},
      {name:'rony', age: '20', department:'mit',id:'4'}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>i love you</h1>
        <Ninjas ninjas={this.state.ninjas} />
        
      </div>
    );
  }
}

export default App;
