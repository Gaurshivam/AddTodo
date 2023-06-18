import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className='container'>
     <h3 className='title'>Todo App</h3>
     <TaskForm />
     <TaskList />
    </div>
  );
}
export default App;