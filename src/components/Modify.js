import React, {Component} from 'react';
import './Modify.css'

class Modify extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentEdit:-1,
            currentItem: {text:''}
        };

        this.deleteIt = this.deleteIt.bind(this);
        this.editIt = this.editIt.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    deleteIt(idx){
        console.log(idx);
        let items1 = this.props.items;
        items1.splice(idx,1)
        this.props.updateItems(items1);
    }

    editIt(idx){
        console.log(idx);
        let items1 = this.props.items;
        let currentItem1 = items1[idx];

        this.setState({currentEdit: idx, currentItem : currentItem1});
    }

    saveIt(idx){
        let items1 = this.props.items;
        items1[idx] = this.state.currentItem;
        this.props.updateItems(items1);
        this.setState({currentEdit: -1, currentItem : {text:''}});
    }


    handleInput(e){
        console.log(e);
        
        let currentItem1 = this.state.currentItem;
        currentItem1["text"] = e.target.value;
        this.setState({currentItem: currentItem1});
    }

    backToHome(){
        this.props.welcomeToHome();
    }

    render(){
        return (
            <div>
                <h2 > Modify the content </h2>
               
                {this.props.items.length > 0 && this.props.items.map((eachItem,idx)=>{
                    return (
                    <div key = {idx}>
                        {
                            this.state.currentEdit === idx ? 
                            <div>
                                <input  
                                className = 'Input' 
                                type="text" value={this.state.currentItem.text} onChange={this.handleInput} />
                                <button className = 'Save'  onClick = {() => {this.saveIt(idx)}}>Save</button>
                            </div>

                        :
                        <div>
                            <span onClick = {() => {this.deleteIt(idx)}}>{eachItem.text}</span>
                            <button className = 'Delete' onClick = {() => {this.deleteIt(idx)}}>Delete</button>
                            <button className = 'Edit' onClick = {() => {this.editIt(idx)}}>Edit</button>
                        </div>
                        }
                        <br/>
                    </div>
                    )
                })}
                
                { this.props.items.length === 0 &&

                    <b>No tasks to modify</b>
                }

                <div>
                    <button className = 'Back'  onClick = {()=>this.backToHome()}>back</button>
                </div>
            </div>
        )
    }
}
export default Modify;
