import React, { Component} from 'react';
import Header from './Header';
import Tasklist from './Tasklist';


class App extends Component {
  state = {

    tasklist: [ { title: 'Humber',tasks: ['Task #1' ,'Task #2', 'Task #3'],id: 1,},
      {title: 'MERN',tasks: ['Lab' ,'Project', 'Quiz'],id: 2, },
      {title: 'Java',tasks: ['GD' ,'Exam', 'Assignment'],id: 3,}, ],
  };

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

render(){

    return(
      <div className='App'>
       <button onClick={this.switchNamehandler}>Click here to Add New Task</button> 
      <Header title="Task List" items={this.state.tasklist.length}/>

      {this.state.tasklist.map((t1) => (

      <Tasklist 
      title={t1.title} 
      item={t1.tasks}
     added={this.taskaddhandler}
       
      />
      )
      )}
      </div>
    );
  }
}


export default App;
