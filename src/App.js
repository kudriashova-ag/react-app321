import './App.css';
import ToDoList from './components/ToDoList';
import Header from './components/template/Header';
import ThemeProvider from './providers/ThemeProvider';

function App() {

  return (
      <ThemeProvider>
        <Header />
        <ToDoList />
      </ThemeProvider>
  );
}

export default App;

