import React , {Component} from 'react';
import './Add.css';

class Add extends Component  {
    constructor(props) {
        super(props)
    
        this.state = {
            currentItem:{
                text:'',
                
              }
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.backToHome = this.backToHome.bind(this);
    }
    
    addItem(){
        
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !==""){
          const items = [...this.props.items, newItem];
            this.props.updateItems(items);
            this.setState({ currentItem:{text:''} });
        }
      }
      
      handleInput(e){
          console.log(e);
        this.setState({
          currentItem:{
            text: e.target.value,
            
          }
        })
      }

      backToHome(){
          this.props.welcomeToHome()
      }
    render(){
        return (
            <div>
                <h3> Add your tasks here </h3>
                
                
                {/* <input type="text" placeholder="Enter task" value = {this.state.currentItem.text} onChange = {()=>this.handleInput}> </input> */}
                
                <input  className = 'Input' type="text" value={this.state.currentItem.text} onChange={this.handleInput} />           
                <button className = 'Add'  onClick = {this.addItem} >Add</button>
                
                
                {this.props.items.length > 0 && this.props.items.map((eachItem,index)=>{
                    return (<div key = {index}>{eachItem.text}</div>)
                })}
                <div>
                <button className = 'Back'  onClick = {()=>this.backToHome()}>back</button>
                </div>
               
                



               
            </div>
        )
    }
    
        
    
}
export default Add;