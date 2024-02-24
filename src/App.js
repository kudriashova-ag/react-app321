import './App.css';
import ToDoList from './components/ToDoList';
import Form1 from './components/forms/form1';
import Form2 from './components/forms/form2';
import Header from './components/template/Header';
import ThemeProvider from './providers/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <Header />
      <ToDoList />
      <Form1 />
      <Form2 />
    </ThemeProvider>
  );
}

export default App;

