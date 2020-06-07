import React from 'react';


const Tasklist = (props) => {

    return (
         <div> 
        <h4>{props.title} </h4>
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
