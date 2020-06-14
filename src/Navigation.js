import React from 'react';

const Navigation = (props)=> {

    return (
         <div> 
          <nav>

         <ul>
             <li>
                 <a href= '/'>Home</a>
             </li>
             <li>
                 <a href= '/post'>Post</a>
             </li>
             <li>
                 <a href= '/tasklist'>Tasklist</a>
             </li>
             <li>
                 <a href= '/todo'>Todo</a>
             </li>

             </ul>              
          </nav>
         </div>
         
         );
      };

    export default Navigation;