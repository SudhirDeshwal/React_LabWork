import React from 'react';


const Tasklist = (props) => {

    return (
         <div> 
        <h4>{props.title}</h4>
        
        <ul> 
        <li>{props.item}</li>

        </ul>
        </div>
         
         );
      }
      

      export default Tasklist;
