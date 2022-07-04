import '../App.css';
import Header from '../components/Header';
import TodoEditor from '../components/TodoEditor';
import TodoList from '../components/TodoList';

export default function MyTodo() {
  return (
    <div className="App">
      <main className="App-main">
        <Header />
        <TodoList />
        <TodoEditor />
      </main>
    </div>
  );
}
