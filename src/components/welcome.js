import React , {Component} from 'react';
import Add from './Add.js';
import Modify from './Modify.js';
import View from './view.js';

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:'Welcome Visitor',
          items:[],
        //   currentItem:{
        //     text:'',
        //     key:''
        //   }
        };
        // this.addItem = this.addItem.bind(this);
        this.updateItems = this.updateItems.bind(this);
        this.welcomeToHome = this.welcomeToHome.bind(this)

      }

      updateItems(items){
          console.log(items);
          this.setState({
            items
          }
              
          );
      }

   
      welcomeToHome(){
            this.setState(
                {
                  message:  'Welcome Visitor' 
                }
            )
      }

    modify(){
        this.setState({
            message:'Modify'
        });
    }
    add(){
        this.setState({
            message:'Add'

        });

    }
    view(){
        this.setState({
            message:'View'
        });
    }
    render(){
        console.log("welcome");

        return (

            <div className = 'Welcome'>
                {this.state.message === 'Welcome Visitor' &&
                <div>
                    <h3 > {this.state.message}</h3>
                    <button className = 'Add' onClick = {()=>this.add()}>Add</button>

                    <button className = 'View'onClick = {()=>this.view()}>View</button>

                    <button className = 'Modify'onClick = {()=>this.modify()}>Modify</button>
                </div>}

                {this.state.message === 'Add' &&
                    <Add 
                        updateItems = {this.updateItems}  
                        items={this.state.items} 
                        welcomeToHome = {this.welcomeToHome}
                    />

                }
                {this.state.message === 'Modify' && 
                    <Modify updateItems = {this.updateItems} 
                        items={this.state.items} 
                        welcomeToHome = {this.welcomeToHome}
                    />
                }
                {this.state.message === 'View' && 
                    <View 
                        items={this.state.items} 
                        welcomeToHome = {this.welcomeToHome}
                    />
                }
            </div>




        )
    }
}

export default Welcome;
