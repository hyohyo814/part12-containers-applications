import React from 'react';

const Todo = ({todo}) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
    <span>
      {todo.text}
    </span>
  </div>
)

export default Todo;