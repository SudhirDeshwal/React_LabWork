import React, { Component} from 'react';
import Header from './Header';
import Tasklist from './Tasklist';
import AddTaskform from './AddTaskform';


class App extends Component {
  state = {

    tasklist: [ { title: 'Humber',tasks: ['Task #1' ,'Task #2', 'Task #3'],id: 1,},
      {title: 'MERN',tasks: ['Lab' ,'Project', 'Quiz'],id: 2, },
      {title: 'Java',tasks: ['GD' ,'Exam', 'Assignment'],id: 3,}, ],
  };
  previd = 4;

 switchNamehandler =() => {

         this.setState({tasklist : [ { title: 'Humber',tasks: ['Task #1' ,'Task #2', 'Task #3'],id: 1,},
         {title: 'MERN',tasks: ['Lab' ,'Project', 'Quiz'],id: 2, },
         {title: 'Java',tasks: ['GD' ,'Exam', 'Assignment'],id: 3,},
         {title: 'Home',tasks: ['Food' ,'Laundry', 'Homecall'],id: 3,}, ] })
 }

 taskaddhandler = (event) => {

  this.setState({tasklist : [ { title: 'Humber',tasks: ['Task #1' ,'Task #2', 'Task #3'],id: 1,},
  {title: 'MERN',tasks: ['Lab' ,'Project', 'Quiz'],id: 2, },
  {title: event.target.value, tasks: ['GD' ,'Exam', 'Assignment'],id: 3,},
  {title: 'Home',tasks: ['Food' ,'Laundry', 'Homecall'],id: 3,}, ] })

 }

 addNewTask = (title, tasks) => {

  this.setState((prevState) => {

    return {
      tasklist : [ ...prevState.tasklist , {
        title: title,
        tasks: tasks ,
        id: (this.previd += 1),}
      ]
    }
  })}

  handleRemoveTask = (id) => {
    this.setState((prevState) => {
      return {
        tasklist: prevState.tasklist.filter((t) => t.id !== id),
      };
    });
  };

render(){

    return(
      <div className='App'>
       {/* <button onClick={this.switchNamehandler}>Click here to Add New Task</button>  */}
      <Header title="Task List" items={this.state.tasklist.length}/>

      {this.state.tasklist.map((t1) => (
     <Tasklist 
      title={t1.title} 
      item={t1.tasks}
      id={t1.id} 
      removeTask={this.handleRemoveTask}/> 
      ))}

      <AddTaskform addtask={this.addNewTask}></AddTaskform>

      </div>
    );
  }
}


export default App;
