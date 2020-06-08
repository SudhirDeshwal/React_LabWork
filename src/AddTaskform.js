import React, { Component } from 'react';

class AddTaskform extends Component {

    state = {
        TaskName: '',
      };

      handleChange =(e)=>{
            this.setState(  
            {TaskName:e.target.value}
            )}

            handlesubmit = (e) => {
                e.preventDefault();
                this.props.addtask(this.state.TaskName);
              this.setState({ TaskName: '' });
              };

        
        
      render(){

        return (
         <form  onSubmit={this.handlesubmit}>
         <input type="text"
       value={this.state.TaskName}
        placeholder= "Type New TaskHeading here"
        onChange = {this.handleChange} ></input>


    <input type="submit"></input>
         </form>
         );}



}



export default AddTaskform;