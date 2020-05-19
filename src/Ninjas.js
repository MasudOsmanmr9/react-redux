import React,{Component} from 'react';

const Ninjas = ({ninjas})=>{
    
        // const {ninjas} = props
        // const ninjaList = ninjas.map(ninja=>{
        //     const{name,age,department,id} = ninja
        //     if(age>20){
        //         return(
        //             <div key={id}>
        //                 <h1>Hy this is {name} Component</h1>
        //                 <h3>Welcome :)</h3>
        //                 <h3>Name : {name}</h3>
        //                 <h3>Age :{age}</h3>
        //                 <h3>Department :{department}</h3>
        //             </div>
        //         );
        //     }else{
        //         return null;
        //     }
        // });
        const ninjaList = ninjas.map(ninja=>{
            const{name,age,department,id} = ninja
            // age>20?():null turnery operator
            return age>20?(
                <div key={id}>
                    <h1>Hy this is {name} Component</h1>
                    <h3>Welcome :)</h3>
                    <h3>Name : {name}</h3>
                    <h3>Age :{age}</h3>
                    <h3>Department :{department}</h3>
                </div>
            ) : null; 
        });
        return(
            <div>
                {/* {ninjas.map(ninja=>{
                    const{name,age,department,id} = ninja
                    // age>20?():null turnery operator
                    return age>20?(
                        <div key={id}>
                            <h1>Hy this is {name} Component</h1>
                            <h3>Welcome :)</h3>
                            <h3>Name : {name}</h3>
                            <h3>Age :{age}</h3>
                            <h3>Department :{department}</h3>
                        </div>
                    ) : null; 
                })} */}
                
                {ninjaList}
              
            </div>
        )
    
}

export default Ninjas;