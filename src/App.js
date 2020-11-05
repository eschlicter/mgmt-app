import React, {Component} from 'react';
import TasksPage from './components/TasksPage';

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

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={mockTasks} />
      </div>
    );
  }
}

export default App;