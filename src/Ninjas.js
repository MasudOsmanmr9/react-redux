import React,{Component} from 'react';

class Ninjas extends Component{
    render(){
        const {ninjas} = this.props
        const ninjaList = ninjas.map(ninja=>{
            const{name,age,department,id} = ninja
            return(
                <div key={id}>
                    <h1>Hy this is {name} Component</h1>
                    <h3>Welcome :)</h3>
                    <h3>Name : {name}</h3>
                    <h3>Age :{age}</h3>
                    <h3>Department :{department}</h3>
                </div>
            );
        })
        return(
            <div>
                {/* {ninjas && ninjas.map(ninja=>{
                    const{name,age,department,id} = ninja
                    return(
                        <div key={id}>
                            <h1>Hy this is {name} Component</h1>
                            <h3>Welcome :)</h3>
                            <h3>Name : {name}</h3>
                            <h3>Age :{age}</h3>
                            <h3>Department :{department}</h3>
                        </div>
                    )
                })} */}
                {ninjaList}
              
            </div>
        )
    }
}

export default Ninjas;