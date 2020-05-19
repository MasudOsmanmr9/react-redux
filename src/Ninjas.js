import React,{Component} from 'react';

class Ninjas extends Component{
    render(){
        const {name,age,department} = this.props
        return(
            <div>
                <h1>Hy this is ninja Component</h1>
                <h3>Welcome :)</h3>
                <h3>name : {name}</h3>
                <h3>Welcome :{age}</h3>
                <h3>Welcome :{department}</h3>
            </div>
        )
    }
}

export default Ninjas;