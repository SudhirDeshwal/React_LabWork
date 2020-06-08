import React, { Component } from 'react';

class AddTaskform extends Component {

    state = {
        value: '',
      };

      handleChange =(e)=>{
            this.setState(  
            {value:e.target.value}
            )}

            handlesubmit = (e) => {
                e.preventDefault();
                this.props.addtask(this.state.value);
               this.setState({ value: '' });
              };

      render(){

        return (
         <form  onSubmit={this.handlesubmit}>
         <input type="text"
         value={this.state.value}
         onChange = {this.handleChange}
         
         ></input>

         <input type="submit"></input>
         </form>
         );}



}



export default AddTaskform;