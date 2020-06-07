import React, { Component} from 'react';
import Header from './Header';

class App extends Component {
  state = {

    tasklist: [
      {
        title: 'Humber',
        tasks: ['Task #1' ,'Task #2', 'Task #3'],
        id: 1,
      },
      {
        title: 'MERN',
        tasks: ['Lab' ,'Project', 'Quiz'],
        id: 1,
      },
      {
        title: 'Java',
        tasks: ['GD' ,'Exam', 'Assignment'],
        id: 1,
      },

    ],
  };

   render(){

    return(
      <div className='App'>
      <Header title="Task List" items="9"/>
      </div>
    );
  }
}


  

export default App;
