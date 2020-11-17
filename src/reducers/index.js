const mockTasks = [
    {
      id: 1, 
      title: 'Some text',
      description: 'more text',
      status: 'In Progress'
    },
    {
      id: 2, 
      title: 'Some more text',
      description: 'some more text',
      status: 'In Progress'
    },
  ];

export default function tasks(state = {tasks: mockTasks}, action){
    return state;
} 