import React from 'react';


const Tasklist = (props) => {

    return (
         <div> 
        <input type="text" onChange={props.added}></input>     
        <h4>{props.title}</h4>
        <ul> 
          {props.item.map((t) => (
              <li>{t}</li> ) 
          ) }
                
          </ul>
        </div>
         
         );
      }
      

      export default Tasklist;
