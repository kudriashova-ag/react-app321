import { Outlet } from 'react-router-dom';
import './App.css';
import ToDoList from './components/ToDoList';
import Header from './components/layout/Header';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

