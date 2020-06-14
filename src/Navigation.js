import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = (props)=> {

    return (
         <div> 
          <nav>

         <ul>
             <li>
                 <NavLink to='/' exact>Home</NavLink>
             </li>
             <li>
                 <NavLink  to='/post'>Post</NavLink>
             </li>
             <li>
                 <NavLink to='/todo'>Todo</NavLink>
             </li>
             <li>
                 <NavLink to='/tasklist'>Tasklist</NavLink>
             </li>

             </ul>              
          </nav>
         </div>
         
         );
      };

    export default Navigation;