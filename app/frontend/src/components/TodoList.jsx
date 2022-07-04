import PropTypes, { objectOf, string } from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoEditor from './TodoEditor';

function TodoList({ todos }) {
  return (
    <div className="TODO">
      <h2>Lista de Tarefas</h2>
      <div>
        {todos.map((todo) => {
          const key = `${todo.id}${todo.name}`;
          if (todo.edit) return <TodoEditor key={key} todo={todo} />;
          return <Todo key={key} todo={todo} />;
        })}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(objectOf(string)),
}.isRequired;

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
