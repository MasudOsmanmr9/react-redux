import React,{Component} from 'react'

class AddNinja extends Component{
    state={
        name:null,
        age:null,
        department:null
    }
    handelChange= (e) =>{
        this.setState({
            [e.target.id] : e.target.value 
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.AddNinja(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}> 
                    <label htmlFor='name'>Name :</label>
                    <input type="text" id="name" onChange={this.handelChange} />
                    <label htmlFor='age'>Age :</label>
                    <input type="text" id="age" onChange={this.handelChange} />
                    <label htmlFor='department'>Dept :</label>
                    <input type="text" id="department" onChange={this.handelChange} />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;