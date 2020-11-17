import {uniqueId} from '../actions';

const mockTasks = [
    {
      id: uniqueId(), 
      title: 'Some text',
      description: 'more text',
      status: 'In Progress'
    },
    {
      id: uniqueId(), 
      title: 'Some more text',
      description: 'some more text',
      status: 'In Progress'
    },
  ];

export default function tasks(state = {tasks: mockTasks}, action){
    return state;
} 