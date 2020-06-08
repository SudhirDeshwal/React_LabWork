import React from 'react';


const Tasklist = (props) => {

    return (
         <div> 
        {/* <input type="text" onChange={props.added}></input>      */}
        <h4>{props.title}</h4>
         {/* <ul>
    <li>{props.item}</li>
         </ul> */}

        <ul> 
          {props.item.map((t) => (
              <li>{t}</li> ) 
          ) }
                
          </ul>
        </div>
         
         );
      }
      

      export default Tasklist;
