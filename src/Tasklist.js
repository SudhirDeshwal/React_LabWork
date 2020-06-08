import React from 'react';


const Tasklist = (props) => {

    return (
         <div> 
        <h4>{props.title} </h4>
        Add Tasks :<input type="text" onChange={props.Added} value={props.Tasks}></input>
          <ul> 
          {props.tasks.map((t) => (
              <li>{t}</li>
          ) 

          ) }
                
          </ul>
         </div>
         
         );
      }
      

      export default Tasklist;
