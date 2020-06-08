import React, { Component} from 'react';
import Header from './Header';
import Tasklist from './Tasklist';


class App extends Component {
  state = {

    tasklist: [ { title: 'Humber',tasks: ['Task #1' ,'Task #2', 'Task #3'],id: 1,},
      {title: 'MERN',tasks: ['Lab' ,'Project', 'Quiz'],id: 1, },
      {title: 'Java',tasks: ['GD' ,'Exam', 'Assignment'],id: 1,}, ],
  };

render(){

    return(
      <div className='App'>
      <Header title="Task List" items={this.state.tasklist.length}/>

      {this.state.tasklist.map((t1) => (

      <Tasklist 
      title={t1.title} 
      tasks={t1.tasks} 
      />
      )
      )}
      </div>
    );
  }
}


export default App;
