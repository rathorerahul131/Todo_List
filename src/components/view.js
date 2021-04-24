import React, {Component} from 'react';

class View extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.backToHome = this.backToHome.bind(this);
    }
    backToHome(){
        this.props.welcomeToHome()
    }
    
    
    render(){
        return (
            <div>
                <h2> The Tasks to do are listed below </h2>
                {this.props.items.length >0 ? this.props.items.map((eachItem)=>{
                        return (<div>
                            <span>
                            {eachItem.text}  
                            </span>    
        
                            </div>)
                    }):<b>No Tasks </b>}
                    <div>
             <button className = 'Back'  onClick = {()=>this.backToHome()}>back</button>
             </div>
            </div>
             
        )
    }
}
export default View;