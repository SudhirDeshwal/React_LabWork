import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';


   class Todo extends Component {

    state = {

      posts : [],
    };

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => { this.setState({ posts: response.data });});
  
    
    }


    

   
    render() {
      return (
        <div>
          {this.state.posts.map((post) => (
            <Post 
            post={post} 
            key={post.id} />
          ))}
        </div>
      );
    }
    };

    export default Todo;